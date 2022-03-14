import { connect } from "react-redux";
import { sendMessageCreate, updateNewwMessageTextCreate } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
   return {
      state: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => { dispatch(updateNewwMessageTextCreate(text)) },
      sendMessage: () => { dispatch(sendMessageCreate()) }
   }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;