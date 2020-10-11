import React, {RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {PostsType} from "../../../redux/state";

/*export type PostsType = {
    id: number
    message: string
    likesCount: number
}*/
type MyPostsType = {
    posts: Array<PostsType>
    addPost:(postMessage:string)=>void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map((p: PostsType) => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement:RefObject<HTMLTextAreaElement> =React.createRef()

    let addPost = () => {
        // @ts-ignore
        let text = newPostElement.current.value
        props.addPost(text)
        // @ts-ignore
        newPostElement.current.value=""
    }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>ADD POST</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts