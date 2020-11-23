import {createStore, combineReducers} from "redux"
import profileReducer, {addPostAC, changeNewTextAC, setUserProfile} from "./profile-reducer";
import dialogsReducer, {addNewMessageAC, changeNewMessageBodyAC} from "./dialogs-reducer";
import {
 follow,
 setCurrentPage,
 setIsFetching,
 setTotalUsersCount,
 setUsers,
 unFollo,
 userReducer
} from "./users-reducer";


export type ActionType = (ReturnType<typeof addPostAC> | (ReturnType<typeof changeNewTextAC>) |
    (ReturnType<typeof changeNewMessageBodyAC> | ReturnType<typeof addNewMessageAC>)
    | ReturnType<typeof follow> | ReturnType<typeof unFollo> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setIsFetching>|ReturnType<typeof setUserProfile>)

let reducers = combineReducers({
 usersPage:userReducer,
 profileReduser:profileReducer,
 dialogsPage:dialogsReducer
})



 let store = createStore(reducers)


export type StoresType = typeof store
export type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>
export default store;