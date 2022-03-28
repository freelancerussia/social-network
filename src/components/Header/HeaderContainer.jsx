import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer'
import { usersAPI } from '../../api/api';
class HeaderContainer extends React.Component {

   componentDidMount() {
      usersAPI.setAuthData()
         .then(response => {
            if (response.data.resultCode === 0) {
               let { email, id, login } = response.data.data;
               this.props.setAuthUserData(id, login, email);
            }
         });
   }

   render() {
      return (
         <Header {...this.props} />
      );
   }

}

let mapStateToProps = (state) => ({
   isFetching: state.auth.isFetching,
   login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);