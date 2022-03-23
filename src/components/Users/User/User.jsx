import React from 'react';
import classes from './User.module.css';
import userPhoto from '../../../assets/images/userMale.png'
import { NavLink } from 'react-router-dom';

function User(props) {

   return (
      <div className={classes.user}>
         <div>
            <div>
               <NavLink to={`/profile/${props.userId}`} >
                  <img className={classes.photo} src={props.userPhoto.small != null ? props.userPhoto.small : userPhoto} alt="" />
               </NavLink>
            </div>
            <div>{props.userFollowed === true ?
               <button className={classes.btn} onClick={() => { props.toggleFollowed(props.userId) }}>follow</button> :
               <button className={classes.btn} onClick={() => { props.toggleFollowed(props.userId) }}>unfollow</button>
            }</div>
         </div>
         <div className={classes.info}>
            <div>
               <div>{props.userFullname}</div>
               <div>{props.userStatus}</div>
            </div>
            <div>
               <div>{"props.userLocation.country"}</div>
               <div>{"props.userLocation.city"}</div>
            </div>
         </div>
      </div>

   );
}

export default User;