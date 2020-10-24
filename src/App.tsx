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
import {StoreType} from "./redux/state";

type PropsType = {
    store:StoreType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.store._state.messagesPage.dialogs}
                                                                  messages={props.store._state.messagesPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.store._state.profilePage.posts}
                                                                  addPost={props.store.addPost.bind(props.store)}
                                                                  newPost={props.store._state.profilePage.newPost}
                                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}
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
