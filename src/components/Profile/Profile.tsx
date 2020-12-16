import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from './ProfileContainer';



function Profile(props:ProfileContainerPropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            <MyPostsContainer />
        </div>

    )
}

export default Profile
