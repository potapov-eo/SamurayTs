import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import state, {addPost, stateType} from "./redux/state"
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}

