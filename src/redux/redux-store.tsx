
import {createStore, combineReducers} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
 profileReduser:profileReducer,
 dialogsReduser:dialogsReducer
})
export type RootReducerType = typeof reducers


 let store = createStore(reducers)


export type StoresType = typeof store
export type ReducersType = typeof reducers
export default store;