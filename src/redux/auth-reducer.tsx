import { AppStateType} from './redux-store';
import {AuthAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {ActionType} from "../Types/Types";

export type initialStateType = {
    userId: number| null
    email: string | null
    login: string | null
    isAuth: boolean

}

let initialState: initialStateType = {
    userId: 0,
    email: null,
    login: "",
    isAuth: false

}
const authReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload,
                            }
        }

        default:
            return state
    }
}
export const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth:boolean) =>
    ({
        type: "SET-USER-DATA",
        payload: {userId, email, login, isAuth}
    } as const)


export const getAuthUserDataThunk = ():ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch,getState) =>{
    AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login,true))
            }
        })
}
export const loginThunk = (email:string, password:string, rememberMe:boolean):ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch,getState) =>{
    AuthAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataThunk())
            }
        })
}
export const logOutThunk = ():ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch,getState) =>{

    AuthAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(0, "", "",false))
            }
        })
}

export default authReducer