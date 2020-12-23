import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLength15, RenderInputField, required} from "../../Utilits/ValidatorsForm/Validators";
export type LoginFormDataType={
    email: string
    password:string
    rememberMe:boolean
}
export const LoginForm:React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={"Email"} name={"email"} component={RenderInputField}
                       validate={[  required ]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={RenderInputField}
                       validate={[  required ]}/>
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