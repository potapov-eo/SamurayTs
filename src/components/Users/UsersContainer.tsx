import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followThunk, getUsers, initialStateType, setCurrentPage, unfollowThunk,} from "../../redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAythRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersFromState
} from "../../redux/users-selectors";


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

/*let mapStateToProps = (state: AppStateType): initialStateType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
let mapStateToProps = (state:AppStateType) => {
    return {
        users: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers, unfollowThunk, followThunk
    }),
   withAuthRedirect
)(UsersContainer)

