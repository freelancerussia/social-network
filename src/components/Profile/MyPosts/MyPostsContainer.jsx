import { connect } from 'react-redux';
import { addPostCreate, updateNewwPostTextCreate } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';




// function MyPostsContainer(props) {
//    let profilepage = props.store.getState().profilePage;


//    let onAddPost = () => {
//       // let text = newPostElement.current.value;
//       props.store.dispatch(addPostCreate());
//       // newPostElement.current.value = '';
//    }

//    let onPostChange = (text) => {
//       // props.updateNewPostText(text);
//       props.store.dispatch(updateNewwPostTextCreate(text));

//    }

//    return (
//       <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} state={profilepage} />
//    );
// }

let mapStateToProps = (state) => {
   return {
      state: state.profilePage
   }


}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => { dispatch(updateNewwPostTextCreate(text)) },
      addPost: () => { dispatch(addPostCreate()) }
   }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;