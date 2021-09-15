import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  const posts = [
    {id: 1, message: 'hello world!', likeCount: 12},
    {id: 2, message: 'hi', likeCount: 55},
  ];

  let postsElements = posts.map((p) => <posts message={p.message} likeCount={p.likeCount}/>);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;