import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   navBar: navBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;