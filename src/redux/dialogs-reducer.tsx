import {ActionType, MessagePageType, MessageType, PostsType} from "./store";
import profileReduser from "./profile-reducer";



let initislState = {
    messages: [
        {id: 1, message: "blablabla"},
        {id: 2, message: "blablabla"}
    ],
    dialogs: [
        {id: 1, name: "Frai"},
        {id: 2, name: "Bender"}
    ],
    newMessageBody: "ManUtd"
}
const dialogsReduser = (state=initislState, action: ActionType) => {
    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.newBody

    } else if (action.type === "ADD-NEW-MESSAGE") {
        let newMessage: MessageType = {
            id: 3,
            message: state.newMessageBody
        }
        state.messages.push(newMessage)
        state.newMessageBody = ""

    }
    return state
}
export const ChangeNewMessageBodyAC = (newBody: string) =>
    ({type: "UPDATE-NEW-MESSAGE-BODY", newBody} as const)
export const AddNewMessageAC = () => ({type: "ADD-NEW-MESSAGE"} as const)
export default dialogsReduser