import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    usersType,
    userType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
let mapStateToProps = (state: AppStateType): initialStateType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsUsersType => {
    return {

        unFollo: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },

        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber:number)=> dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount:(totalCount:number)=>dispatch(setTotalUsersCountAC(totalCount))
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UserContainer