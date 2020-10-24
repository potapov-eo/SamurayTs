import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store  from "./redux/state"
import {BrowserRouter} from "react-router-dom";
import App from "./App";

 let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}



rerenderEntireTree()
store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
