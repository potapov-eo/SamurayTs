import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType, PostsType} from "../../redux/store";
import {StoresType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: ActionType) => void
}
type PropsRType = {
    store: StoresType

}

function Profile(props: PropsRType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>

    )
}

export default Profile
/* posts={props.posts}
                    newPost={props.newPost}
                    dispatch={props.dispatch}/>*/