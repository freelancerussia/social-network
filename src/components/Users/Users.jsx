import React from 'react';
import User from './User/User';
import classes from './Users.module.css';

let Users = (props) => {

   let renderUsers = () => {
      return props.users
         .map(user => {
            return (
               <User setUserId={props.setUserId} key={user.id} userPhoto={user.photos} userFollowed={user.followed} userId={user.id} userFullname={user.name}
                  userLocation={user.location} userStatus={user.status} toggleFollowed={props.toggleFollowed} ></User>
            )
         })
   }

   let pagesCount = Math.ceil(props.totalCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div className={classes.users}>
         <div>
            {pages.map(p => {
               return <span key={p} className={props.currentPage === p ? `${classes.active} ${classes.pageNumber}` : classes.pageNumber}
                  onClick={props.onpageChange}>{p}</span>
            })}
         </div>
         {/* <button onClick={this.getUsers}>Get USERS</button> */}
         {renderUsers()}
      </div>
   )
}

export default Users;