import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts, {PostsType} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";

type mapStateToPropsMyPostsType = {
    posts: Array<PostsType>

}
 type mapDispatchToPropsMyPostsType = {
    addPost: (NewPost:string) => void

}
export type MyPostsPropsType= mapStateToPropsMyPostsType & mapDispatchToPropsMyPostsType
let mapStateToProps = (state: AppStateType): mapStateToPropsMyPostsType => {

    return {

        posts: state.profileReduser.posts,

    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost })(MyPosts)


export default MyPostsContainer
