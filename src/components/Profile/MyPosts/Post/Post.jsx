import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://i.pinimg.com/236x/c6/01/c2/c601c2841f984591d01e56a8f0696346--avatar-film-avatar-theme.jpg'/>
        {props.message}
        <div>
          <span>like</span> {props.like}
        </div>
      </div>
    </div>
  );
}

export default Post;