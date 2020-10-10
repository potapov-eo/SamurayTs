import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount:12},
    {id: 2, message: "1", likesCount: 10},
    {id: 1, message: "Hi, how are you???", likesCount:15},
    {id: 2, message: "1111", likesCount: 11}
]
function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>

    )
}

export default Profile