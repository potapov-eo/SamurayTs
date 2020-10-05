import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


let dialogs = [
    {id: 1, name: "Frai"},
    {id: 2, name: "Bender"}
]
let messages = [
    {id: 1, message: "blablabla"},
    {id: 2, message: "blablabla"}

]
let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messages.map(m => <Message message={m.message}/>)

function Dialogs() {
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