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
import { StoresType} from "./redux/redux-store";

type PropsRType = {
    store:StoresType

}

function App(props: PropsRType) {
    let state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsReduser.dialogs}
                                                                  messages={state.dialogsReduser.messages}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newMessageBody={state.dialogsReduser.newMessageBody}
                    />}/>
                    <Route path='/profile' render={() => <Profile posts={state.profileReduser.posts}
                                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                                  newPost={state.profileReduser.newPost}

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
