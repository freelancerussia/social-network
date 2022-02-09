import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfiliInfo/ProfileInfo';

function Profile() {
   return (
      <div className={classes.profile}>
         <ProfileInfo />
         <MyPosts />
      </div >
   );
}

export default Profile;
