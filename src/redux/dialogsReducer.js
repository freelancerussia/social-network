const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE"

let initialState = {
   dialogsData: [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'AlexMan' },
      { id: 3, name: 'Xan' },
      { id: 4, name: 'Bany' },
   ],

   messagesData: [
      { id: 1, text: 'hi' },
      { id: 2, text: 'you' },
      { id: 3, text: 'lol' },
      { id: 4, text: 'hahaha' }
   ],
   sendMessageBody: "",
};

function dialogsReducer(state = initialState, action) {
   // let stateCopy = Object.assign({}, state)

   switch (action.type) {
      case SEND_NEW_MESSAGE:
         let newMessage = {
            id: state.messagesData.length + 1,
            text: state.sendMessageBody,
         }
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            sendMessageBody: ""
         }
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            sendMessageBody: action.newMessage
         }

      default:
         return state;
   }

   // if (action.type === SEND_NEW_MESSAGE) {

   //    // stateCopy.messagesData.push(newMessage);
   //    // stateCopy.sendMessageBody = "";
   //    // this.renderEntireTree(this._state);


   // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
   //    stateCopy.sendMessageBody = action.newMessage;
   //    // this.renderEntireTree(this._state);
   // }
   // return stateCopy;
}

export let sendMessageCreate = () => ({ type: SEND_NEW_MESSAGE });
export let updateNewwMessageTextCreate = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text });

export default dialogsReducer;