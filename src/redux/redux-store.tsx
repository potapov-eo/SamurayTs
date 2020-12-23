import {applyMiddleware, combineReducers, createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {userReducer} from "./users-reducer";
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
 usersPage:userReducer,
 profileReduser:profileReducer,
 dialogsPage:dialogsReducer,
 auth:authReducer,
 form:formReducer
})



 let store = createStore(reducers,applyMiddleware(thunk))


export type StoresType = typeof store
export type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export default store;