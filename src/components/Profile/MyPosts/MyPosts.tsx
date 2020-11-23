import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((p: PostsType) => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {

        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeNewText(text)
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