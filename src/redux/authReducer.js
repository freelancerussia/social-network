import { authAPI } from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";


let initialState = {
   userId: null,
   login: null,
   email: null,
   isAuthMe: false

};

function authReducer(state = initialState, action) {
   // let stateCopy = Object.assign({}, state)
   switch (action.type) {
      case SET_AUTH_DATA:

         return {
            ...state,
            ...action.data,
            isAuthMe: true
         }

      default:
         return state;
   }

}

export let setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_DATA, data: { userId, login, email } });

export const getauthUserData = () => {
   return dispatch => {
      authAPI.setAuthData()
         .then(response => {

            if (response.data.resultCode === 0) {
               let { email, id, login } = response.data.data;
               dispatch(setAuthUserData(id, login, email));
            }
         });
   }
}

export default authReducer;