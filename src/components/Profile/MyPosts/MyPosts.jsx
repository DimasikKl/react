import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength20 = maxLengthCreator(20)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='New post' validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;