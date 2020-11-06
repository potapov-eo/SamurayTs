import React from 'react';
import {addNewMessageAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux"
import {AppStateType} from '../../redux/redux-store';

/*function DialogsContainer() {
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
}*/

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageAC())
        },
        onNewTextChange: (newMessage: string) => {
            dispatch(changeNewMessageBodyAC(newMessage))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer