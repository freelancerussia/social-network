import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";

const dialogsData = [
   { id: 1, name: 'Alex' },
   { id: 2, name: 'AlexMan' },
   { id: 3, name: 'Xan' },
   { id: 4, name: 'Bany' },
];

const messagesData = [
   { id: 1, text: 'hi' },
   { id: 2, text: 'you' },
   { id: 3, text: 'lol' },
   { id: 4, text: 'hahaha' },
];
function Dialogs() {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
            <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
            <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
            <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />

         </div>
         <div className={classes.messages}>
            <Message text={messagesData[0].text}></Message>
            <Message text={messagesData[1].text}></Message>
            <Message text={messagesData[2].text}></Message>
            <Message text={messagesData[3].text}></Message>
         </div>
      </div>
   );
}

export default Dialogs;