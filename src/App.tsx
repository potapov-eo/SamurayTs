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

import {AppType} from "./redux/state";


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
                                                                  addPost={props.addPost}
                                                                  newPost={props.state.profilePage.newPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}
                    />

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
