import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {maxLength15, RenderTextField, required, tooOld} from "../../Utilits/ValidatorsForm/Validators";

export type AddMessageFormDataType={
    NewMessage: string

}
export const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormDataType>> =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"NewMessage"} name={"NewMessage"} component={RenderTextField}
                       validate={[ maxLength15, required ]}
                       warn={tooOld}/>
            </div>
            <div>
                <button >ADD POST</button>
            </div>
        </form>
    )
}