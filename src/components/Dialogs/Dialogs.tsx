import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogType, MessageType} from "../../redux/state";


type DialogsType = {

    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


function Dialogs(props: DialogsType) {
    let dialogElements = props.dialogs.map((d: DialogType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m: MessageType) => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messeges}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs