import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {getAuthUserDataThunk} from "../../redux/auth-reducer";


type HeaderContainerPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void,
    isAuth: boolean,
    login: string,
    getAuthUserDataThunk:()=>void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunk()
    }
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
export default connect(mstp, {setAuthUserData,getAuthUserDataThunk})(HeaderContainer)