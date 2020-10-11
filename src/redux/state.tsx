import React from 'react';
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "1", likesCount: 10},
            {id: 1, message: "Hi, how are you???", likesCount: 15},
            {id: 2, message: "1111", likesCount: 11}
        ]

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
export let addPost=(postMessage:string)=>{
  let newPost = {
      id:5,
      message:postMessage,
      likesCount: 0
  }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export default state;