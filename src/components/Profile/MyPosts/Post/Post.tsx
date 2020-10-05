import React from 'react';
import s from "./Post.module.css"
type PropsType = {
    message : string
    likesCount:number
    id?:number
}
function Post(props: PropsType) {
    return (
        <div className={s.item}>
            <img src="https://topspiski.com/wp-content/uploads/2018/01/259323-700x438.jpg"/>
            {props.message}
        </div>

    )
}
export default Post