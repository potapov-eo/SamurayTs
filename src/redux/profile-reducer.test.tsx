import {ProfilePageType} from "./store";
import profileReducer, {addPostAC, changeNewTextAC} from "./profile-reducer";

let initialState: ProfilePageType
beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "1", likesCount: 10},
            {id: 1, message: "Hi, how are you???", likesCount: 15},
            {id: 2, message: "1111", likesCount: 11}
        ],
        newPost: "MU"
    }
})
test('add post should be correct', () => {


    const action = addPostAC();

    const endState = profileReducer(initialState, action)


    expect(endState.posts.length).toBe(5);
    expect(endState.posts[4].likesCount).toBe(0);
    expect(endState.newPost).toBe("");
});
test('Changed new text should be correct', () => {


    const action = changeNewTextAC("HELLO WORD");

    const endState = profileReducer(initialState, action)



    expect(endState.newPost).toBe("HELLO WORD");
});