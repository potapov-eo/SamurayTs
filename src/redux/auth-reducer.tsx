import {ActionType, AppStateType} from './redux-store';
import {AuthAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";

export type initialStateType = {
    userId: number
    email: string | null
    login: string
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
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}
export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({
        type: "SET-USER-DATA",
        data: {userId, email, login}
    } as const)


export const getAuthUserDataThunk = ():ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch,getState) =>{

    AuthAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default authReducer