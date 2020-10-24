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
    store: StoreType
}

function App(props: PropsType) {
    let state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.messagesPage.dialogs}
                                                                  messages={state.messagesPage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage.posts}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newPost={state.profilePage.newPost}

                    />}
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
