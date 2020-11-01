import {ActionType, MessagePageType, MessageType, PostsType, ProfilePageType} from "./store";


let initislState= {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "1", likesCount: 10},
        {id: 1, message: "Hi, how are you???", likesCount: 15},
        {id: 2, message: "1111", likesCount: 11}
    ],
    newPost: ""
}
const profileReduser = (state=initislState, action: ActionType) => {
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

export const AddPostAC = () => ({type: "ADD-POST"} as const)
export const ChangeNewTextAC = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText} as const)
export default profileReduser
