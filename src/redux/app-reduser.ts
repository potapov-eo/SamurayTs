import {getAuthUserDataThunk} from "./auth-reducer";
import {ActionType} from "../Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: true
};
export type appReducerStateType ={
    initialized:boolean
}
const appReducer = (state = initialState, action:ReturnType<typeof initializedSuccess>) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppTH = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch:any) => {
    let promise = dispatch(getAuthUserDataThunk());
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;