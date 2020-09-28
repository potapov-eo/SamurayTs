import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post.tsx";


function MyPosts() {
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
                <Post message="Hi, how are you?"/>
                <Post message="1"/>

            </div>
        </div>
    )
}

export default MyPosts