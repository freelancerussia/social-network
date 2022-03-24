const SET_AUTH_DATA = "SET_AUTH_DATA";


let initialState = {
   userId: null,
   login: null,
   email: null,
   isFetching: false

};

function authReducer(state = initialState, action) {
   // let stateCopy = Object.assign({}, state)
   switch (action.type) {
      case SET_AUTH_DATA:

         return {
            ...state,
            ...action.data,
            isFetching: true
         }

      default:
         return state;
   }

}

export let setAuthUserData = (userId, login, email) => ({ type: SET_AUTH_DATA, data: { userId, login, email } });

export default authReducer;