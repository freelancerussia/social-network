import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfiliInfo/ProfileInfo';



function Profile(props) {

   return (
      <div className={classes.profile}>
         <ProfileInfo />
         <MyPostsContainer store={props.store}
         />
      </div >
   );
}

export default Profile;
