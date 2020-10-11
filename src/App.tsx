import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Profile from "./components/Profile/Profile";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
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
    addPost:(postMessage:string)=>void
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.messagesPage.dialogs}
                                                                  messages={props.state.messagesPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}
                                                                  addPost={props.addPost}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
