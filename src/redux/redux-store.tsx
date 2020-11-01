
import {createStore, combineReducers} from "redux"
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";

let reducers = combineReducers({
/* profileReduser,
 dialogsReduser    альтернативный синтаксис*/
 profileReduser:profileReduser,
 dialogsReduser:dialogsReduser
})
export type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

 let store = createStore(reducers )
export type StoresType = typeof store

export default store;