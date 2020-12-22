import React from 'react';
import s from "./MyPosts.module.css"
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {aol, maxLength, RenderTextField, required, tooOld} from "../../../Utilits/ValidatorsForm/Validators";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map((p: PostsType) => <Post key={Math.random()*100} message={p.message} likesCount={p.likesCount}/>);

    const onSubmit=(formData:AddPostFormDataType)=>{
              props.addPost(formData.NewPost)
    }
      return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
type AddPostFormDataType={
    NewPost: string

}

const maxLength15 = maxLength(15)
const AddNewPostForm:React.FC<InjectedFormProps<AddPostFormDataType>> =(props)=>{
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"NewPost"} name={"NewPost"} component={RenderTextField}
                       validate={[ maxLength15, required ]}
                       warn={tooOld}/>
            </div>
            <div>
                <button >ADD POST</button>
            </div>
        </form>
    )
}




const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm )
export default MyPosts