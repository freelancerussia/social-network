import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const postsData = [
   { id: 1, message: 'hi,how are you?', likeCount: 10 },
   { id: 2, message: "it's my first post", likeCount: 12 },
];
function MyPosts() {
   return (
      <div className={classes.postsBlock}>
         <h3> My post</h3>
         <div>
            <textarea></textarea>
            <button className={classes.btn}>Add post</button>
         </div>
         <ul className={classes.posts}>
            <Post message={postsData[0].message} likeCount={postsData[0].likeCount}></Post>
            <Post message={postsData[1].message} likeCount={postsData[1].likeCount}></Post>
         </ul>
      </div >
   );
}

export default MyPosts;