import React from 'react';
import {rerenderEntireTree} from "../render";

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
    likesCount: number}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPost:string
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
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}



let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "1", likesCount: 10},
            {id: 1, message: "Hi, how are you???", likesCount: 15},
            {id: 2, message: "1111", likesCount: 11}
        ],
newPost:""
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
}

export let addPost=()=>{
  let newPost:PostsType = {
      id:5,
      message:state.profilePage.newPost,
      likesCount: 0
  }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPost=""
    rerenderEntireTree(state)
}
export let updateNewPostText=(newText:string) =>{
    state.profilePage.newPost=newText
    rerenderEntireTree(state)
}
export default state;