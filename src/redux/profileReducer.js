const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_ID = "UPDATE-NEW-SET_USER_ID-TEXT";
const SET_PROFILE_USER_DATA = "SET_PROFILE_USER_DATA";

let initialState = {
   postsData: [
      { id: 1, message: 'hi,how are you?', likeCount: 10 },
      { id: 2, message: "it's my first post", likeCount: 12 },
      { id: 3, message: "it's my first post", likeCount: 12 },
      { id: 4, message: "it's my first post", likeCount: 12 },
   ],
   newPostText: '',
   userId: 1,
   profileUserData: null,

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
      case SET_USER_ID:
         return {
            ...state,
            userId: action.userId
         }
      case SET_PROFILE_USER_DATA:
         return {
            ...state,
            profileUserData: action.profileUser
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

export let addPostCreate = () => ({ type: ADD_POST });
export let updateNewwPostTextCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export let setUserId = (userId) => ({ type: SET_USER_ID, userId });
export let setProfileUserData = (profileUser) => ({ type: SET_PROFILE_USER_DATA, profileUser });

export default profileReducer;