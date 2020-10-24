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
export default dialogsReduser