import React, {ChangeEvent, RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {ActionType, AddPostAC, ChangeNewTextAC, PostsType} from "../../../redux/state";


type MyPostsType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: ActionType) => void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map((p: PostsType) => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {

        props.dispatch(AddPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(ChangeNewTextAC(text))
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