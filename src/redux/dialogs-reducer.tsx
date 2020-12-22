import {ActionType} from './redux-store';
import {MessageType} from '../components/Dialogs/Dialogs';


let initislState = {
    messages: [
        {id: 1, message: "blablabla"},
        {id: 2, message: "blablabla"}
    ],
    dialogs: [
        {id: 1, name: "Frai"},
        {id: 2, name: "Bender"}
    ],
}
const dialogsReducer = (state = initislState, action: ActionType) => {
    switch (action.type) {

        case "ADD-NEW-MESSAGE": {
            let newMessage: MessageType = {
                id: 3,
                message: action.NewMessage
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
export const addNewMessageAC = (NewMessage: string) => ({type: "ADD-NEW-MESSAGE", NewMessage} as const)
export default dialogsReducer