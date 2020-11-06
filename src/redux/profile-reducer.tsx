import {ActionType, PostsType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "1", likesCount: 10},
        {id: 1, message: "Hi, how are you???", likesCount: 15},
        {id: 2, message: "1111", likesCount: 11}
    ],
    newPostText: "MU"
}
const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST" :
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ""}

        case "CHANGE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const changeNewTextAC = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText} as const)
export default profileReducer
