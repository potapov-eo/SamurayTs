import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from "./DialogsContainer";
import {reduxForm} from "redux-form";
import {AddMessageForm, AddMessageFormDataType} from "./AddMessageForm";

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

    const onSubmit=(formData:AddMessageFormDataType)=>{
        console.log(formData)
        props.addNewMessage(formData.NewMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messeges}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: "NewMessage"})(AddMessageForm )
export default Dialogs