import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';


function MyPosts() {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount:12},
        {id: 2, message: "1", likesCount: 10},
        {id: 1, message: "Hi, how are you???", likesCount:15},
        {id: 2, message: "1111", likesCount: 11}
        ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>ADD POST</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements}
            </div>
        </div>
    )
}

export default MyPosts