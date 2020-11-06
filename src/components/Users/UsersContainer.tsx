import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, usersType, userType} from "../../redux/users-reducer";


let mapStateToProps = (state: AppStateType):usersType => {

    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {

        unFollo: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },

        setUsers: (users:Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UserContainer