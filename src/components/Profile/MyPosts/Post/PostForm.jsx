import React from "react";
import {Field} from "redux-form";

const PostForm = (props) => {
    return (
        <form>
            <div>
                <Field placeholder={'New post'}  name={'post'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default PostForm;