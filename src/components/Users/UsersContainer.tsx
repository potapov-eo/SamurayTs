import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import Users from "./Users";

export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type UsersAPIComponentType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}


class UsersContainer extends React.Component<UsersAPIComponentType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unFollo={this.props.unFollo}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
        />
    }
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
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


export default UserContainer