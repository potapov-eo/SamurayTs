
import {addNewMessageAC, changeNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs, {DialogType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux"
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from "../../hoc/withAythRedirect";


type mapStateToPropsDialogsType ={
    newMessageBody: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth:boolean
}
 type mapDispatchToPropsDialogsType ={
    addNewMessage: () => void
    onNewTextChange: (newMessage: string) => void
}
export type DialogsPropsType=mapStateToPropsDialogsType&mapDispatchToPropsDialogsType

    let mapStateToProps = (state: AppStateType):mapStateToPropsDialogsType => {
    return {
        isAuth:state.auth.isAuth,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsDialogsType => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageAC())
        },
        onNewTextChange: (newMessage: string) => {
            dispatch(changeNewMessageBodyAC(newMessage))
        }
    }
}
let AuthRedirectComponent=withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer