import React, {ChangeEvent} from 'react';
import {addNewMessageAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import StoreContext from "../../StorContext";
import {addPostAC} from "../../redux/profile-reducer";



function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }
    let addNewMessage = () => {
        store.dispatch(addNewMessageAC())
    }

    const onNewTextChange = (newMessage: string) => {
        store.dispatch(changeNewMessageBodyAC(newMessage))
    }

    return <Dialogs addNewMessage={addNewMessage}
                    onNewTextChange={onNewTextChange}
                    messages={store.getState().dialogsReduser.messages}
                    dialogs={store.getState().dialogsReduser.dialogs}
                    newMessageBody={store.getState().dialogsReduser.newMessageBody}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer