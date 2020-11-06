import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


/*function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                       store.dispatch(addPostAC())
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(changeNewTextAC(text))
                    }

                  return  <MyPosts addPost={addPost}
                             onPostChange={onPostChange}
                             newPostText={store.getState().profileReduser.newPostText}
                             posts={store.getState().profileReduser.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps =(state:any)=>{

    return{

        posts: state.profileReduser.posts,
        newPost:state.profileReduser.newPostText,
           }
}
let mapDispatchToProps =(dispatch:any)=>{
    return{
        addPost: ()=>{
            dispatch(addPostAC())
        },
        onPostChange: (text:string)=>{
            dispatch(changeNewTextAC(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer
