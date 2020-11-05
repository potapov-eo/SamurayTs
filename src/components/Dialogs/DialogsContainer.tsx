import React from 'react';
import {addNewMessageAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


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

let mapStateToProps =(state:any)=>{
    return{
        dialogs: state.dialogsReduser.dialogs,
        messages:state.dialogsReduser.messages,
        newMessageBody:state.dialogsReduser.newMessageBody
    }
}
let mapDispatchToProps =(dispatch:any)=>{
    return{
        addNewMessage: ()=>{
            dispatch(addNewMessageAC())
        },
        onNewTextChange: (newMessage:string)=>{
            dispatch(changeNewMessageBodyAC(newMessage))
        }
    }
    }
    const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer