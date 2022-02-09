import classes from './Dialog.module.css';
import { NavLink } from "react-router-dom";

function Dialog(props) {
   let path = "/dialogs/" + props.id;
   return (
      <div className={classes.dialog}>
         <NavLink className={nav => nav.isActive ? `${classes.dialogLink}  ${classes.active}` : classes.dialogLink} to={path}>{props.name} </NavLink>
      </div >
   );
}

export default Dialog;