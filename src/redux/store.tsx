import React from 'react';
import profileReducer, {addPostAC, changeNewTextAC} from "./profile-reducer";
import dialogsReducer, {addNewMessageAC, changeNewMessageBodyAC} from "./dialogs-reducer";


export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type MessagePageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
export type stateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
}
export type AppType = {
    state: stateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type StoreType = {
    _state: stateType


    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionType) => void
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}
export type ActionType = (ReturnType<typeof addPostAC> | (ReturnType<typeof changeNewTextAC>) |
    (ReturnType<typeof changeNewMessageBodyAC> | ReturnType<typeof addNewMessageAC>))

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "1", likesCount: 10},
                {id: 1, message: "Hi, how are you???", likesCount: 15},
                {id: 2, message: "1111", likesCount: 11}
            ],
            newPostText: ""
        },
        messagesPage: {
            messages: [
                {id: 1, message: "blablabla"},
                {id: 2, message: "blablabla"}
            ],
            dialogs: [
                {id: 1, name: "Frai"},
                {id: 2, name: "Bender"}
            ],
            newMessageBody: ""
        }
    },

    _rerenderEntireTree() {
        console.log("  dfhdfhdfh ")
    },//onChange()
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)


        this._rerenderEntireTree()
    }

}


export default store;
