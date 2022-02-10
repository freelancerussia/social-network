import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';




function MyPosts(props) {

   let postsElements = props.postsData
      .map(post => (<Post key={post.id} message={post.message} likeCount={post.likeCount} />));

   return (
      <div className={classes.postsBlock}>
         <h3> My post</h3>
         <div>
            <textarea></textarea>
            <button className={classes.btn}>Add post</button>
         </div>
         <ul className={classes.posts}>
            {postsElements}
         </ul>
      </div >
   );
}

export default MyPosts;