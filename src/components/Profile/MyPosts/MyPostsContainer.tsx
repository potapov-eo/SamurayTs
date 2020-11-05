import React from 'react';
import {AddPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StorContext";


function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                       store.dispatch(AddPostAC())
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(ChangeNewTextAC(text))
                    }

                  return  <MyPosts addPost={addPost}
                             onPostChange={onPostChange}
                             newPost={store.getState().profileReduser.newPost}
                             posts={store.getState().profileReduser.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer