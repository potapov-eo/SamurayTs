import React from 'react'
import styles from "./Validators.module.css"

export const required = (value:string) => value ? undefined : 'Enter you text'
export const maxLength = (max:number) => (value:string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export  const maxLength15 = maxLength(15)
const number = (value:number) => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = (min:number) => (value:number) =>
    value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = (value:string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
export const tooOld = (value:number) =>
    value && value > 65 ? 'You might be too old for this' : undefined
export const aol = (value:string) =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined

type RenderInputFieldPropsType={
    input:string,
    label:string,
    type:string,
    meta:{
        touched:boolean,
        error:string,
        warning:string
    }
}
export const RenderTextField = ({ input, label, type, meta: { touched, error, warning } }:RenderInputFieldPropsType) => {

    const hasError = touched && error
    return (
        <>
            <div className={styles.formControl + " " +(hasError? styles.error:"")}>
                <textarea {...input} placeholder={label} type={type}/>
                <div className={styles.formControl + " " + styles.error}>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} </div>
            </div>
        </>
)
}

export const RenderInputField = ({ input, label, type, meta: { touched, error, warning } }:RenderInputFieldPropsType) => {

    const hasError = touched && error
    return (
        <>
            <div className={styles.formControl + " " +(hasError? styles.error:"")}>
                <input {...input} placeholder={label} type={type}/>
                <div className={styles.formControl + " " + styles.error}>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))} </div>
            </div>
        </>
    )
}





