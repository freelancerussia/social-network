import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

function Navbar() {
   return (
      <div className={classes.navbar}>

         <div >
            <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/profile">Profile</NavLink>
         </div>
         <div >
            <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/news">News</NavLink>
         </div>
         <div >
            <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/dialogs">Messages</NavLink>
         </div>
         <div >
            <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/music">Music</NavLink>
         </div>
         <div >
            <NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/settings">Settings</NavLink>
         </div>
      </div>

   );
}

export default Navbar;