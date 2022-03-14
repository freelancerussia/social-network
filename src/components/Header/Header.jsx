import React from 'react';
import classes from './Header.module.css'

function Header() {
   return (
      <header className={classes.header}>
         <img className={classes.header__img} src='https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg' />
      </header>
   );
}

export default Header;