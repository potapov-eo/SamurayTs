import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
     followThunk, getUsers,
    initialStateType,
    setCurrentPage,
     unfollowThunk,
} from "../../redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";


export type mapDispatchToPropsUsersType = {

    setCurrentPage: (pageNumber: number) => void

    getUsers: (currentPage: number, pageSize: number) => void
    followThunk: (userID: number) => void
    unfollowThunk: (userID: number) => void


}
export type UsersAPIComponentType = mapDispatchToPropsUsersType & initialStateType

class UsersContainer extends React.Component<UsersAPIComponentType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
         setCurrentPage,
        getUsers, unfollowThunk, followThunk
    })
(UsersContainer)

