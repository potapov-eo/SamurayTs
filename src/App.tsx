import React, {Component, ComponentType} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserDataThunk, logOutThunk, setAuthUserData} from "./redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";
import {initializeAppTH} from "./redux/app-reduser";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader/Preloader";

type AppPropsType = {
    initialized:boolean,
    initializeAppTH: () => void
}

class App extends React.Component<AppPropsType&RouteComponentProps> {
    componentDidMount() {
        this.props.initializeAppTH()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="App-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/setting' render={() => <Setting/>}/>
                        <Route path='/login' render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state:AppStateType) => ({
    initialized: state.app.initialized
})
export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTH}))(App)
