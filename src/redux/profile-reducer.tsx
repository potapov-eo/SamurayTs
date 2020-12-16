import {ActionType, AppStateType} from "./redux-store";
import {PostsType} from "../components/Profile/MyPosts/MyPosts";
import {profileType} from "../components/Profile/ProfileContainer";
import {profileAPI, UserAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "1", likesCount: 10},
        {id: 1, message: "Hi, how are you???", likesCount: 15},
        {id: 2, message: "1111", likesCount: 11}
    ],
    newPostText: "MU",
    profile: {} as profileType,
    status: ""
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
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}


export const addPost = () => ({type: "ADD-POST"} as const)
export const changeNewText = (newText: string) =>
    ({type: "CHANGE-NEW-TEXT", newText} as const)
export const setUserProfile = (profile: profileType) => ({type: "SET-USER-PROFILE", profile} as const)

export const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)

export const getUserProfileThunk = (userId: string): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch: any) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatusThunk = (userId: string): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatusThunk = (status: string): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch: any) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode===0){
        dispatch(setStatus(status))
        }
    })
}

export default profileReducer