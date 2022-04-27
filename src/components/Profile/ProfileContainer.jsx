import axios from 'axios';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import Profile from './Profile';
import { getProfileUser } from '../../redux/profileReducer';
import Login from '../Login/Login';


const withRouter = (WrappedComponent) => {
   return (props) => {
      const params = useParams();
      // etc... other react-router-dom v6 hooks
      return (
         <WrappedComponent
            {...props}
            params={params}
         // etc...
         />
      );
   }
};

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.params.userId;
      if (!userId) {
         userId = 2;
      }
      // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      // usersAPI.setProfile(userId)
      //    .then(response => {
      //       // debugger;
      //       this.props.setProfileUserData(response.data);
      //    });
      this.props.getProfileUser(userId)
   }

   render() {
      if (!this.props.isAuthMe) return <Navigate to="/login/" />
      return (
         <Profile {...this.props}></Profile>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profileUserData: state.profilePage.profileUserData,
      isAuthMe: state.auth.isAuthMe

   }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getProfileUser })(WithUrlDataContainerComponent);
