import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from "../../redux/state";

type ProfileType={
    posts:Array<PostsType>
    addPost:()=>void
    newPost:string
    updateNewPostText:(newText:string)=>void
}


function Profile(props:ProfileType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPost={props.newPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}

export default Profile