import React from 'react';
import s from "./Profile.module.css"
import MyPosts, {PostsType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfileType={
    posts:Array<PostsType>
    addPost:(postMessage:string)=>void
}


function Profile(props:ProfileType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}/>
        </div>

    )
}

export default Profile