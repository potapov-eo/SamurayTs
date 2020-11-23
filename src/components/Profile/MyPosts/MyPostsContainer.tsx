import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts, {PostsType} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type mapStateToPropsMyPostsType = {
    posts: Array<PostsType>
    newPost: string
}
export type mapDispatchToPropsMyPostsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsMyPostsType => {

    return {

        posts: state.profileReduser.posts,
        newPost: state.profileReduser.newPostText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsMyPostsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            dispatch(changeNewTextAC(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer
