import React from 'react';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {LoginForm, LoginFormDataType} from "./LoginForn";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type mapDispatchToPropsProfileContainerType={
    loginThunk:(email:string, password:string, rememberMe:boolean)=>void
}
type mapStateToPropsProfileContainerType={
    isAuth:boolean
}
type LoginPropsType=mapStateToPropsProfileContainerType & mapDispatchToPropsProfileContainerType

const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm )

const Login = (props:LoginPropsType) => {

const onSubmit=(formData:LoginFormDataType)=>{
    props.loginThunk(formData.email,formData.password, formData.rememberMe )
}
if(props.isAuth){
    return <Redirect to={"/profile"}/>
}
    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let  mapStateToProps = (state: AppStateType):mapStateToPropsProfileContainerType => {
    return {
        isAuth:state.auth.isAuth
}}
export default connect(mapStateToProps, {loginThunk})(Login);