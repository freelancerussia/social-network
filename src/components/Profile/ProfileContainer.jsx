import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserId, setProfileUserData } from '../../redux/profileReducer';


class ProfileContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
         .then(response => {
            // debugger;
            this.props.setProfileUserData(response.data);
            // console.log(response.data);
         });
   }

   render() {
      return (
         <Profile {...this.props}></Profile>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      userId: state.profilePage.userId,
      profileUserData: state.profilePage.profileUserData

   }
}


export default connect(mapStateToProps, { setUserId, setProfileUserData })(ProfileContainer);
