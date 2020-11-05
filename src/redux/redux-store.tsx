
import {createStore, combineReducers} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";

let reducers = combineReducers({
 profileReduser:profileReducer,
 dialogsReduser:dialogsReduser
})
export type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

 let store = createStore(reducers )
export type StoresType = typeof store

export default store;