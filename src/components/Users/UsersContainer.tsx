import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import loading from "./../../accets/images/loading.svg"
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    usersType,
    userType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";

export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
export type UsersAPIComponentType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<userType>
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void

}


class UsersContainer extends React.Component<UsersAPIComponentType> {


    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollo={this.props.unFollo}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): initialStateType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
        setIsFetching: (isFetching: boolean) => dispatch(setIsFetchingAC(isFetching))
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


export default UserContainer