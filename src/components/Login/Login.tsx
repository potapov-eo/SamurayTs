import React from 'react';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {LoginForm, LoginFormDataType} from "./LoginForn";


type mapDispatchToPropsProfileContainerType={
    loginThunk:(email:string, password:string, rememberMe:boolean)=>void
}
const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm )

const Login = (props:mapDispatchToPropsProfileContainerType) => {
const onSubmit=(formData:LoginFormDataType)=>{
    props.loginThunk(formData.email,formData.password, formData.rememberMe )
}
    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default connect(null, {loginThunk})(Login);