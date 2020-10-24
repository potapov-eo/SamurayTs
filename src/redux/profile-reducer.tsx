import {ActionType, MessagePageType, MessageType, PostsType, ProfilePageType} from "./state";

const profileReduser=(state:ProfilePageType, action:ActionType)=>{
    if (action.type === "ADD-POST") {
        let newPost: PostsType = {
            id: 5,
            message: state.newPost,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPost = ""

    } else if (action.type === "CHANGE-NEW-TEXT") {
        state.newPost = action.newText

    }
    return state
}
export default profileReduser