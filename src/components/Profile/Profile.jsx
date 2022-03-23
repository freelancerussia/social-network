import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfiliInfo/ProfileInfo';
import { useParams } from 'react-router-dom';




function Profile(props) {
   return (
      <div className={classes.profile}>
         <ProfileInfo {...props} />
         <MyPostsContainer
         />
      </div >
   );
}

export default Profile;
