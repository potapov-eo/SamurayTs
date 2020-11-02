import React, {ChangeEvent, RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {ActionType, PostsType} from "../../../redux/store";
import {AddPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";


type MyPostsType = {
    posts: Array<PostsType>
    newPost: string
    addPost: () => void
    onPostChange:(text:string) => void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map((p: PostsType) => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {

        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPost}/>
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