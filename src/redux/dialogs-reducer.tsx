import {ActionType, MessagePageType, MessageType, PostsType} from "./state";
import profileReduser from "./profile-reducer";

 const dialogsReduser=(state:MessagePageType, action:ActionType)=>{
     if (action.type === "UPDATE-NEW-MESSAGE-BODY"){
         state.newMessageBody = action.newBody

    }else if (action.type === "ADD-NEW-MESSAGE"){
        let newMessage: MessageType = {
            id: 3,
            message: state.newMessageBody}
         state.messages.push(newMessage)
         state.newMessageBody = ""

    }
    return state
}
export const ChangeNewMessageBodyAC = (newBody: string) =>
    ({type: "UPDATE-NEW-MESSAGE-BODY", newBody} as const)
export const AddNewMessageAC = () => ({type: "ADD-NEW-MESSAGE"} as const)
export default dialogsReduser