import {addNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs, {DialogType, MessageType} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux"
import {AppStateType} from '../../redux/redux-store';
import {ComponentType} from "react";


type mapStateToPropsDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth: boolean
}
type mapDispatchToPropsDialogsType = {
    addNewMessage: (NewMessage: string) => void

}
export type DialogsPropsType = mapStateToPropsDialogsType & mapDispatchToPropsDialogsType

let mapStateToProps = (state: AppStateType): mapStateToPropsDialogsType => {
    return {
        isAuth: state.auth.isAuth,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsDialogsType => {
    return {
        addNewMessage: (NewMessage) => {
            dispatch(addNewMessageAC(NewMessage))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
  )(Dialogs)