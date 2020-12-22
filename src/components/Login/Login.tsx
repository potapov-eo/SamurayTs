import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength15, RenderInputField, required} from "../../Utilits/ValidatorsForm/Validators";

type LoginFormDataType={
    Login: string
    Password:string
    rememberMe:boolean
}
const LoginForm:React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={"Login"} name={"Login"} component={RenderInputField}
                       validate={[ maxLength15, required ]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={RenderInputField}
                       validate={[ maxLength15, required ]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormDataType>({form: "login"})(LoginForm )

const Login = () => {
const onSubmit=(formData:LoginFormDataType)=>{
    console.log(formData)
}
    return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;