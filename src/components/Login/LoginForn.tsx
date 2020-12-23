import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {RenderInputField, required} from "../../Utilits/ValidatorsForm/Validators";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    Captcha: string
}
const LoginForm: React.FC<InjectedFormProps<LoginFormDataType > & mapStateToPropsLoginFormType> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={"Email"} name={"email"} component={RenderInputField}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={RenderInputField}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>

            <div>
                <button>Login</button>
            </div>
            {props.Captcha?(<div>
                <img alt="?"
                     src={props.Captcha}/>
                <Field placeholder={"Captcha"} name={"Captcha"} component={RenderInputField}
                       validate={[required]}/>
            </div>):""}

        </form>
    )
}

type mapStateToPropsLoginFormType = {
    Captcha: string
}
let mapStateToProps = (state: AppStateType): mapStateToPropsLoginFormType => {
    return {
        Captcha: state.auth.Captcha
    }
}
export default connect(mapStateToProps, {})(LoginForm);

