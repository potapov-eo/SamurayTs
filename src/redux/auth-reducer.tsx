import {AppStateType} from './redux-store';
import {AuthAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {ActionType} from "../Types/Types";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

export type initialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    Captcha: string
}

let initialState: initialStateType = {
    userId: 0,
    email: null,
    login: "",
    isAuth: false,
    Captcha: ""
}
const authReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload,
            }
        }
        case "SET-CAPTCHA": {
            return {
                ...state,
                Captcha: action.Captcha,
            }
        }

        default:
            return state
    }
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, Captcha: string) =>
    ({
        type: "SET-USER-DATA",
        payload: {userId, email, login, isAuth, Captcha}
    } as const)

export const setCaptcha = (Captcha: string) => ({type: "SET-CAPTCHA", Captcha} as const)
export const getAuthUserDataThunk = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch, getState) => {
  return   AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true, ""))
            }
        })
}
export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkAction<void, AppStateType, unknown, ActionType | FormAction> => (dispatch, getState) => {
    AuthAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataThunk())
            } else if (response.data.resultCode === 10) {
                AuthAPI.getCaptcha().then(res => {
                    dispatch(setCaptcha(res.data.url))
                })

            }
            // stopSubmit - action from Redux-form
            else {
                let message = response.data.messages.length>0? response.data.messages[0]:"some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logOutThunk = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch, getState) => {

    AuthAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(0, "", "", false, ""))
            }
        })
}


export default authReducer