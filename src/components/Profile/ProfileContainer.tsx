import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getStatusThunk, getUserProfileThunk, setUserProfile, updateStatusThunk} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {withAuthRedirect} from "../../hoc/withAythRedirect";
import {compose} from "redux";
import {profileType} from "../../Types/Types";


type mapStateToPropsProfileContainerType={
    profile:profileType
    status:string

}
type mapDispatchToPropsProfileContainerType={
    setUserProfile:(profile: profileType) => void
    getUserProfileThunk:(user:string)=>void
    getStatusThunk:(userId:string)=>void
    updateStatusThunk:(status: string)=>void
}
export type ProfileContainerPropsType = mapStateToPropsProfileContainerType & mapDispatchToPropsProfileContainerType

type pathParamsType ={
    userId:string
}
type PropsType= RouteComponentProps<pathParamsType>&ProfileContainerPropsType
class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
       let userId=this.props.match.params.userId
        if (!userId) {
            userId ="2"
        }
        this.props.getUserProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }
    render() {

        return (

            <Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatusThunk={this.props.updateStatusThunk}/>
        )
    }
}


let  mapStateToProps = (state: AppStateType):mapStateToPropsProfileContainerType => {
    return {
        profile:state.profileReduser.profile,
        status:state.profileReduser.status
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfileThunk,getStatusThunk, updateStatusThunk}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)