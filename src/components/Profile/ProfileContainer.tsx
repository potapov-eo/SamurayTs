import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter,RouteComponentProps} from 'react-router';
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

export type profileType = {
    aboutMe:string
    contacts:{
        facebook:string | null
        website: string | null
        vk: string | null
        twitter:string | null
        instagram:string | null
        youtube:string | null
        github:string | null
        mainLink:string | null
    }
    lookingForAJob:boolean
    lookingForAJobDescription:string | null
    fullName:string
    userId:number
    photos:{
        small:string
        large:string
    }

}

type mapStateToPropsProfileContainerType={
    profile:profileType
    isAuth:boolean
}
type mapDispatchToPropsProfileContainerType={
    setUserProfile:(profile: profileType) => void
    getUserProfileThunk:(user:string)=>void
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

    }
    render() {
        if(!this.props.isAuth) return <Redirect to="/login" />
        return (

            <Profile {...this.props}
            profile={this.props.profile}/>
        )
    }
}
let  mapStateToProps = (state: AppStateType):mapStateToPropsProfileContainerType => {

    return {
        profile:state.profileReduser.profile,
        isAuth:state.auth.isAuth
    }
}
let withURLDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile, getUserProfileThunk}) (withURLDataContainerComponent)
