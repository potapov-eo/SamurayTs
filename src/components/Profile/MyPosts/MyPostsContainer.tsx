import React, {ChangeEvent, RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {ActionType, PostsType} from "../../../redux/store";
import {AddPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import {StoresType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";


type MyPostsType = {
    posts: Array<PostsType>
    newPost: string
    dispatch: (action: ActionType) => void
}
type PropsRType = {
    store:StoresType

}
function MyPostsContainer(props: PropsRType) {



    let addPost = () => {

        props.store.dispatch(AddPostAC())
    }

    const onPostChange = (text:string) => {

        props.store.dispatch(ChangeNewTextAC(text))
    }
    return (
        <MyPosts addPost={addPost}
                 onPostChange={onPostChange}
                 newPost={props.store.getState().profileReduser.newPost}
                 posts={props.store.getState().profileReduser.posts}
                 />
    )
}

export default MyPostsContainer