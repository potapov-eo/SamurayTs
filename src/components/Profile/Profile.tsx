import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, PostsType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: ActionType) => void
}


function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPost={props.newPost}
                     dispatch={props.dispatch}/>
        </div>

    )
}

export default Profile