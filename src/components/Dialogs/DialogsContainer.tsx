import React, {ChangeEvent} from 'react';
import {AddNewMessageAC, ChangeNewMessageBodyAC} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import StoreContext from "../../StorContext";
import {AddPostAC} from "../../redux/profile-reducer";



function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(AddPostAC())
                    }
    let addNewMessage = () => {
        store.dispatch(AddNewMessageAC())
    }

    const onNewTextChange = (newMessage: string) => {
        store.dispatch(ChangeNewMessageBodyAC(newMessage))
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