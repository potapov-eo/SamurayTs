
import {createStore, combineReducers} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
 profileReduser:profileReducer,
 dialogsPage:dialogsReducer
})



 let store = createStore(reducers)


export type StoresType = typeof store
export type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export default store;