import {ActionType, PostsType} from "./store";


let initialState= {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "1", likesCount: 10},
        {id: 1, message: "Hi, how are you???", likesCount: 15},
        {id: 2, message: "1111", likesCount: 11}
    ],
    newPost: "MU"
}
const profileReducer = (state=initialState, action: ActionType) => {
    switch (action.type){
        case "ADD-POST" : {
            const stateCopy = {...state}
        let newPost: PostsType = {
            id: 5,
            message: stateCopy.newPost,
            likesCount: 0
        }
            stateCopy.posts.push(newPost)
            stateCopy.newPost = ""
            return {...stateCopy}
    }
        case "CHANGE-NEW-TEXT":  {
            const stateCopy = {...state}
            stateCopy.newPost = action.newText
            return {...stateCopy}
    }
        default: return state
}}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const changeNewTextAC = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText} as const)
export default profileReducer
