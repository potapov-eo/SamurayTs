import React from 'react';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import LoginForm, { LoginFormDataType} from "./LoginForn";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type mapDispatchToPropsProfileContainerType={
    loginThunk:(email:string, password:string, rememberMe:boolean,captcha:string)=>void
}
type mapStateToPropsProfileContainerType={
    isAuth:boolean
    Captcha:string
}
type LoginPropsType=mapStateToPropsProfileContainerType & mapDispatchToPropsProfileContainerType

const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm  )

const Login = (props:LoginPropsType) => {

const onSubmit=(formData:LoginFormDataType)=>{
    props.loginThunk(formData.email,formData.password, formData.rememberMe,formData.Captcha  )
}
if(props.isAuth){
    return <Redirect to={"/profile"}/>
}
    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm   onSubmit={onSubmit}/>
    </div>
}
let  mapStateToProps = (state: AppStateType):mapStateToPropsProfileContainerType => {
    return {
        isAuth:state.auth.isAuth,
        Captcha:state.auth.Captcha
}}
export default connect(mapStateToProps, {loginThunk})(Login);