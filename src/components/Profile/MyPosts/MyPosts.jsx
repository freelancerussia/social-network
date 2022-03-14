// import React from 'react';
import { addPostCreate, updateNewwPostTextCreate } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css'
import Post from './Post/Post';




function MyPosts(props) {

   let postsElements = props.state.postsData
      .map(post => (<Post key={post.id} message={post.message} likeCount={post.likeCount} />));

   // let newPostElement = React.createRef();

   let onAddPost = () => {
      // let text = newPostElement.current.value;
      // props.dispatch(addPostCreate());
      // newPostElement.current.value = '';
      props.addPost();
   }

   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
      // props.dispatch(updateNewwPostTextCreate(text));

   }

   return (
      <div className={classes.postsBlock}>
         <h3> My post</h3>
         <div>
            <textarea onChange={onPostChange} value={props.state.newPostText} />
            <button onClick={onAddPost} className={classes.btn}>Add post</button>
         </div>
         <ul className={classes.posts}>
            {postsElements}
         </ul>
      </div >
   );
}

export default MyPosts;