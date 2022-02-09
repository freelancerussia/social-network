import React from 'react';
import classes from './ProfileInfo.module.css'

function Profile() {
   return (
      <div>
         <div>
            <img className={classes.img} src="https://static-cse.canva.com/blob/759807/vk1776.e44b8161.avif"></img>
         </div>
         <div>
            ava + desc
         </div>
      </div>

   );
}

export default Profile;