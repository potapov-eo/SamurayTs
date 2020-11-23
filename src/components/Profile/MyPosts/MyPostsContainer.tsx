import React from 'react';
import {addPost, changeNewText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts, {PostsType} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";

 type mapStateToPropsMyPostsType = {
    posts: Array<PostsType>
    newPost: string
}
 type mapDispatchToPropsMyPostsType = {
    addPost: () => void
    changeNewText: (text: string) => void
}
export type MyPostsPropsType= mapStateToPropsMyPostsType & mapDispatchToPropsMyPostsType
let mapStateToProps = (state: AppStateType): mapStateToPropsMyPostsType => {

    return {

        posts: state.profileReduser.posts,
        newPost: state.profileReduser.newPostText,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, changeNewText })(MyPosts)


export default MyPostsContainer
