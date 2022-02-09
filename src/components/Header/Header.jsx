import React from 'react';
import classes from './Header.module.css'

function Header() {
   return (
      <header className={classes.header}>
         <img className={classes.header__img} src='https://www.pinclipart.com/picdir/middle/51-511102_design-free-logo-srj-hd-logo-png-clipart.png' />
      </header>
   );
}

export default Header;