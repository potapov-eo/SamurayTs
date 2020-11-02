import React, {ChangeEvent} from 'react';
import {AddNewMessageAC, ChangeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoresType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type PropsRType = { store: StoresType }

function DialogsContainer(props: PropsRType) {

    let addNewMessage = () => {
        props.store.dispatch(AddNewMessageAC())
    }

    const onNewTextChange = (newMessage: string) => {
        props.store.dispatch(ChangeNewMessageBodyAC(newMessage))
    }

    return <Dialogs addNewMessage={addNewMessage}
                    onNewTextChange={onNewTextChange}
                    messages={props.store.getState().dialogsReduser.messages}
                    dialogs={props.store.getState().dialogsReduser.dialogs}
                    newMessageBody={props.store.getState().dialogsReduser.newMessageBody}/>
}

export default DialogsContainer