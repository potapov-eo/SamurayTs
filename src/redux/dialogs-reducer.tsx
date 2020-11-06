import {ActionType, MessageType,} from "./store";

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
const dialogsReducer = (state = initislState, action: ActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            const stateCopy = {...state, newMessageBody: action.newBody}
            return {...stateCopy}
        }
        case "ADD-NEW-MESSAGE": {
            let newMessage: MessageType = {
                id: 3,
                message: state.newMessageBody
            }
            const stateCopy = {...state, messages: [...state.messages, newMessage], newMessageBody: ""}
            return {...stateCopy}
        }
        default:
            return state
    }
}
export const changeNewMessageBodyAC = (newBody: string) =>
    ({type: "UPDATE-NEW-MESSAGE-BODY", newBody} as const)
export const addNewMessageAC = () => ({type: "ADD-NEW-MESSAGE"} as const)
export default dialogsReducer