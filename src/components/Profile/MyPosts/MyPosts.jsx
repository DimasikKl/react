import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  const PostData = [
    {id: 1, message: 'hello world!', likeCount: 12},
    {id: 2, message: 'hi', likeCount: 55},
  ];

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
        <Post message = {PostData[0].message} like = {PostData[0].likeCount}/>
        <Post message = {PostData[1].message} like = {PostData[1].likeCount}/>
      </div>
    </div>
  );
}

export default MyPosts;