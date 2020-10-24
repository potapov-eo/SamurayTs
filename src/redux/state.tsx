import React from 'react';


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
    newPost: string
}
export type MessagePageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
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
export type ActionType = (ReturnType<typeof AddPostAC> | (ReturnType<typeof ChangeNewTextAC>))

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "1", likesCount: 10},
                {id: 1, message: "Hi, how are you???", likesCount: 15},
                {id: 2, message: "1111", likesCount: 11}
            ],
            newPost: ""
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

        }
    },
    /*updateNewPostText(newText: string) {
        this._state.profilePage.newPost = newText
        this._rerenderEntireTree()
    },*/
    /* addPost() {
         let newPost: PostsType = {
             id: 5,
             message: this._state.profilePage.newPost,
             likesCount: 0
         }
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newPost = ""
         this._rerenderEntireTree()
     },*/
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
        if (action.type === "ADD-POST") {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPost = ""
            this._rerenderEntireTree()
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.newPost = action.newText
            this._rerenderEntireTree()
        }
    }

}
export const AddPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const ChangeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const
}
export default store;