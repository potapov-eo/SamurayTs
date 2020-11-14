import {ActionType} from "./store";
import * as axios from 'axios'

export type photosType = {
    small: null | string
    large: null | string
}
export type userType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: photosType
    status: null | string
    followed: boolean
}
type GetUsersResponseType = {
    items: userType[]
    totalCount: number
    error: string | null
}
type initialStateType = {
    users: userType[]
}

export type usersType = { users: Array<userType> }


let initialState = {
    users: [

       /* {id: 77777777777, followed: true, name: "Bob", uniqueUrlName: "", photos: {small: "", large: ""}, status: ""}*/

    ]

}
export const userReducer = (state: initialStateType = initialState, action: ActionType): initialStateType=> {
    switch (action.type) {
        case "UNFOLLOW" :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "FOLLOW" :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "SET-USERS" : {
            let stateCopy = {...state}
            const newUsers = [...action.users, ...stateCopy.users]
            stateCopy = {...stateCopy, users: newUsers}
            return  stateCopy

        }
        /*  ...state, users: [ ...state.users, ...action.users]*/
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: userType[]) => ({type: "SET-USERS", users} as const)

