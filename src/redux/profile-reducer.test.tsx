import profileReducer, {addPost} from "./profile-reducer";
import {PostsType} from '../components/Profile/MyPosts/MyPosts';

export type ProfilePageType = {
    posts: Array<PostsType>
    profile:any
    status:string
}
let initialState: ProfilePageType
beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "1", likesCount: 10},
            {id: 1, message: "Hi, how are you???", likesCount: 15},
            {id: 2, message: "1111", likesCount: 11}
        ],
       profile:{},
        status: ""
    }
})
test('add post should be correct', () => {

const newPost="yo"
    const action = addPost(newPost);

    const endState = profileReducer(initialState, action)


    expect(endState.posts.length).toBe(5);
    expect(endState.posts[4].likesCount).toBe(0);

});
