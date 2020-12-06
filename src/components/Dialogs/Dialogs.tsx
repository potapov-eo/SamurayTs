import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom"
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}


function Dialogs(props: DialogsPropsType) {
    let dialogElements = props.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m: MessageType) => <Message message={m.message}/>)

    let addNewMessage = () => {
        props.addNewMessage()
    }

    const onNewTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.onNewTextChange(newMessage)
    }
    if(!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messeges}>
                {messagesElements}
                <div>
                    <textarea onChange={onNewTextChange} value={props.newMessageBody}/>
                </div>
                <div>
                    <button onClick={addNewMessage}>ADD POST</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs