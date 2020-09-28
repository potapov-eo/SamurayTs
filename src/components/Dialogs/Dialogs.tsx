import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from 'react-router-dom';


type DialogItemPropsType={
    name: string
    id:string
}
function DialogItem(props:DialogItemPropsType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType={

    message:string
}

function Message(props:MessagePropsType){
    return <div className={s.dialog}>
        {props.message}
    </div>
}

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Frai" id="1"/>
                <DialogItem name="Bender" id="2"/>

            </div>
            <div className={s.messeges}>
                <Message message="blablabla"/>
                <Message message="dododododo"/>
            </div>
        </div>
    )
}

export default Dialogs