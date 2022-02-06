import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validator";
import {Textarea} from "../../common/FormsControl/FormsControl";

const MyPosts = React.memo(props => {

    let postsElements = [...props.posts]
        .reverse()
        .map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const maxLength20 = maxLengthCreator(20)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='New post'
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;