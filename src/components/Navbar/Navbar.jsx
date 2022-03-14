import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import classes from './Navbar.module.css'

function Navbar(props) {
   let linkData = props.state.navBarLinks
      .map(link => <NavLink key={link.id} className={navData => navData.isActive ? classes.active + ' ' + classes.item : classes.item} to={link.path}>{link.link}</NavLink>);

   let friendsData = props.state.friends
      .map(friend => <Friend key={friend.id} name={friend.name} src={friend.src}></Friend>)
   return (
      <div className={classes.navbar}>
         <div className={classes.links}>
            {linkData}
         </div>
         <div className={classes.friends}>
            <h3>Friends</h3>
            <div className={classes.friendsList}>
               {friendsData}
            </div>
         </div>
      </div>

   );
}

export default Navbar;