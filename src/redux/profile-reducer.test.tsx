
import profileReducer, {addPostAC, changeNewTextAC} from "./profile-reducer";
import {PostsType} from '../components/Profile/MyPosts/MyPosts';
import {profileType} from '../components/Profile/ProfileContainer';
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile:any
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
        newPostText: "MU",
        profile:{}
    }
})
test('add post should be correct', () => {


    const action = addPostAC();

    const endState = profileReducer(initialState, action)


    expect(endState.posts.length).toBe(5);
    expect(endState.posts[4].likesCount).toBe(0);
    expect(endState.newPostText).toBe("");
});
test('Changed new text should be correct', () => {


    const action = changeNewTextAC("HELLO WORD");

    const endState = profileReducer(initialState, action)



    expect(endState.newPostText).toBe("HELLO WORD");
});