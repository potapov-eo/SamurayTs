import React, {ChangeEvent} from 'react';
import s from "./../Dialogs.module.css"
import {ActionType, AddNewMessageAC, AddPostAC, ChangeNewTextAC, PostsType} from "../../../redux/state";


type MessagePropsType = {
    message: string
}

function Message(props: MessagePropsType) {

    return <div className={s.dialog}>
        {props.message}

    </div>
}

export default Message