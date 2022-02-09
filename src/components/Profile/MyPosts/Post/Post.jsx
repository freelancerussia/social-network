import React from 'react';
import classes from './Post.module.css'

function Post(props) {
   return (
      <div className={classes.item} >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOsF-y29-GWAoI_hEUSnnWsUDb4D2-elpDg&usqp=CAU" alt="" />
         {props.message}
         <div>
            <span>like</span>
            <span>{props.likeCount}</span>
         </div>
      </div >
   );
}

export default Post;