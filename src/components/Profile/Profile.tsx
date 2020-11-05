import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, PostsType} from "../../redux/store";

import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: ActionType) => void
}


function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}

export default Profile
