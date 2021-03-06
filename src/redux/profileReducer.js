import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_USER_DATA = "SET_PROFILE_USER_DATA";
const SET_STATUS = "SET_STATUS";

let initialState = {
   postsData: [
      { id: 1, message: 'hi,how are you?', likeCount: 10 },
      { id: 2, message: "it's my first post", likeCount: 12 },
      { id: 3, message: "it's my first post", likeCount: 12 },
      { id: 4, message: "it's my first post", likeCount: 12 },
   ],
   newPostText: '',
   profileUserData: null,
   status: ""

};
function profileReducer(state = initialState, action) {
   // let stateCopy = Object.assign({}, state)
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: state.postsData.length + 1,
            message: state.newPostText,
            likeCount: 0
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ""
         }
      // stateCopy.postsData.push(newPost);
      // stateCopy.newPostText = "";
      // break;
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }
      case SET_PROFILE_USER_DATA:
         return {
            ...state,
            profileUserData: action.profileUser
         }
      case SET_STATUS:
         return {
            ...state,
            status: action.status
         }
      // stateCopy.newPostText = action.newText;
      // break;

      default:
         return state;
   }
   // if (action.type === ADD_POST) {

   //    // this.renderEntireTree(this.state);
   // } else if (action.type === UPDATE_NEW_POST_TEXT) {
   //    stateCopy.newPostText = action.newText;
   //    // this.renderEntireTree(this._state);
   // }
   // return stateCopy;
}

export let addPost = () => ({ type: ADD_POST });
export let updateNewwPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export let setProfileUserData = (profileUser) => ({ type: SET_PROFILE_USER_DATA, profileUser });
export let setStatus = (status) => ({ type: SET_STATUS, status });
// export let updateProfileStatus = (status) => ({ type: UPDATE_STATUS, status });

export const getProfileUser = (userId) => {
   return dispatch => {
      profileAPI.setProfile(userId)
         .then(response => {
            dispatch(setProfileUserData(response.data));
         });
   }
}

export const getStatus = (userId) => {
   return dispatch => {
      profileAPI.getStatus(userId)
         .then(response => {
            dispatch(setStatus(response.data));
         });
   }
}

export const updateStatus = (status) => {
   return dispatch => {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setStatus(status));
            }
         });
   }
}

export default profileReducer;