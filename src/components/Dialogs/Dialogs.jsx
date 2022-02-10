import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";





function Dialogs(props) {

   let dialogsElements = props.state.dialogsData
      .map(dialog => (<Dialog key={dialog.id} name={dialog.name} id={dialog.id} />));

   let messagesElements = props.state.messagesData
      .map(message => (<Message key={message.id} text={message.text} />));

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>

            {dialogsElements}

         </div>
         <div className={classes.messages}>

            {messagesElements}

         </div>
      </div>
   );
}

export default Dialogs;