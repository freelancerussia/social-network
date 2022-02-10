import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfiliInfo/ProfileInfo';



function Profile(props) {
   return (
      <div className={classes.profile}>
         <ProfileInfo />
         <MyPosts postsData={props.postsData} />
      </div >
   );
}

export default Profile;
