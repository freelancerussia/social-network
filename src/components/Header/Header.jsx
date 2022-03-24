import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

function Header(props) {
   return (
      <header className={classes.header}>
         <img className={classes.header__img} src='https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg' />

         {props.isFething ? <NavLink to="/login" className={classes.auth}>Login</NavLink> : props.login}
      </header>
   );
}

export default Header;