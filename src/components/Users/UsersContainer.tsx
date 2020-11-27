import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    initialStateType,
    setCurrentPage, setFollowingInProgress, setIsFetching, setTotalUsersCount,
    setUsers,
    unFollo,
    userType
} from "../../redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {UserAPI} from '../../api/api';


export type mapDispatchToPropsUsersType = {
    follow: (userID: number) => void
    unFollo: (userID: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (id: number, isFetching:boolean)  => void
}
export type UsersAPIComponentType = mapDispatchToPropsUsersType & initialStateType

class UsersContainer extends React.Component<UsersAPIComponentType> {


    componentDidMount() {
        this.props.setIsFetching(true)

        UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        UserAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
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
                setFollowingInProgress={this.props.setFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {unFollo, follow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setFollowingInProgress})
(UsersContainer)

