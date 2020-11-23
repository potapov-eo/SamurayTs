import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';

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
        small:string | null
        large:string | null
    }

}

export type ProfileContainerType = {
    setUserProfile:(profile: profileType) => void
    profile:profileType|{}
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
          this.props.setUserProfile(response.data)
    })
    }

    render() {
        return (

            <Profile {...this.props}
            profile={this.props.profile}/>
        )
    }
}

let  mapStateToProps = (state: AppStateType) => {

    return {
        profile:state.profileReduser.profile
    }
}

export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer)
