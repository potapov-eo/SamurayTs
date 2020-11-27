import {ActionType} from './redux-store';

export type initialStateType = {
    userId: number
    email: string
    login: string
    isAuth: boolean

}

let initialState = {
    userId: 0 ,
    email:"",
    login: "",
    isAuth: false

}
const authReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                 isAuth:true
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

export default authReducer