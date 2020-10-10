import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';

export type PostsType= {
    id:number
    message:string
    likesCount: number
}
type PropsType = {
    posts:Array<PostsType>
}

function MyPosts(props:PropsType) {



    let postsElements = props.posts.map((p:PostsType) => <Post message={p.message} likesCount={p.likesCount}/>);

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