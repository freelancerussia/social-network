import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import usermale from "../../../assets/images/userMale.png"

function ProfileInfo(props) {
   // console.log(props);
   if (!props.profileUserData) {
      return <Preloader></Preloader>
   }
   return (
      <div>
         <div>
            <img className={classes.img} src="https://static-cse.canva.com/blob/759807/vk1776.e44b8161.avif"></img>
         </div>
         <div>
            <div className={classes.userPhoto} ><img src={props.profileUserData.photos.small || usermale} /></div>
            <div>{props.profileUserData.fullName}</div>
            ava + desc
         </div>
      </div>

   );
}

export default ProfileInfo;