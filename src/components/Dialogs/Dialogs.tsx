import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogType, MessageType} from "../../redux/store";

type DialogsType = {
    newMessageBody: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addNewMessage: () => void
    onNewTextChange: (newMessage: string) => void
}


function Dialogs(props: DialogsType) {
    let dialogElements = props.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m: MessageType) => <Message message={m.message}/>)

    let addNewMessage = () => {
        props.addNewMessage()
    }

    const onNewTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.onNewTextChange(newMessage)
    }

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