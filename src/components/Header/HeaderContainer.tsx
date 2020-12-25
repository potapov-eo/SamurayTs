import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logOutThunk, setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';


type HeaderContainerPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean, Captcha: string) => void,
    isAuth: boolean,
    login: string | null,

    logOutThunk: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return <Header {...this.props} />
    }
}

const mstp = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mstp, {setAuthUserData, logOutThunk})(HeaderContainer)