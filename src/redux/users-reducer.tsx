import {ActionType} from './redux-store';
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
export type initialStateType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

export type usersType = { users: Array<userType> }


let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 100,
    currentPage: 5,
    isFetching: true

}
export const userReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
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

            stateCopy = {...stateCopy, users: action.users}
            return stateCopy

        }
        case "SET-CURRENT-PAGE" : {
            let stateCopy = {...state}
            stateCopy = {...stateCopy, currentPage: action.pageNumber}
            return stateCopy
        }
        case "SET-TOTAL-COUNT" : {
            let stateCopy = {...state}
            stateCopy = {...stateCopy, totalUsersCount: action.totalCount}
            return stateCopy
        }
        case "TOGGLE-IS-FETCHING" : {
            let stateCopy = {...state}
            stateCopy = {...stateCopy, isFetching: action.isFetching}
            return stateCopy
        }

        /*  ...state, users: [ ...state.users, ...action.users]*/
        default:
            return state
    }
}
export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unFollo = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: userType[]) => ({type: "SET-USERS", users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: "SET-CURRENT-PAGE", pageNumber} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: "SET-TOTAL-COUNT", totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

