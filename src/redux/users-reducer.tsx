import {AppStateType} from './redux-store';
import {UserAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {ActionType, userType} from "../Types/Types";


export type GetUsersResponseType = {
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
    followingInProgress:Array<number>
}
let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 100,
    currentPage: 5,
    isFetching: true,
    followingInProgress:[]

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
        case "TOGGLE-IS-FOLLOWING-PROGRESS" : {

            let stateCopy = {...state}
            stateCopy = {...stateCopy, followingInProgress:  action.isFetching
                    ? [...state.followingInProgress , action.id]
                    : state.followingInProgress.filter(id=>id!==action.id)}
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
export const setFollowingInProgress = (id: number, isFetching:boolean) => ({type: "TOGGLE-IS-FOLLOWING-PROGRESS", id, isFetching} as const)

export const getUsers= (currentPage:number, pageSize:number):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch:any) =>{
    dispatch(setIsFetching(true))
      UserAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}
export const followThunk = (userId:number):ThunkAction<void, AppStateType, unknown, ActionType> =>{
    return (dispatch:any) =>{
    dispatch(setFollowingInProgress(userId, true))
    UserAPI.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(setFollowingInProgress(userId, false))
    })
}}
export const unfollowThunk = (userId:number):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch:any) =>{
    dispatch(setFollowingInProgress(userId, true))

    UserAPI.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollo(userId))
        }
        dispatch(setFollowingInProgress(userId, false))
    })
}

