import React from 'react';
import classes from './Friend.module.css'

function Friend(props) {

   return (
      <div className={classes.friend}>
         <img src={props.src} alt="" />
         <div>
            {props.name}
         </div>
      </div>

   );
}

export default Friend;