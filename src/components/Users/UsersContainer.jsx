import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setTotalCount, setUsers, toggleFollowed, toggleIsFetching, } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setTotalCount(response.data.totalCount);
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);

            // console.log(response.data.items);

         });
   }

   onpageChange = (e) => {
      // return +e.target.innerHTML;
      this.props.setCurrentPage(+e.target.innerHTML);
      this.props.toggleIsFetching(true);

      // console.log(this.props);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${+e.target.innerHTML}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
         });
   }



   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onpageChange={this.onpageChange}
               toggleFollowed={this.props.toggleFollowed}
               users={this.props.users}
            />
         </>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalCount: state.usersPage.totalCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   }
}
// let mapDispatchToProps = (dispatch) => {
//    return {
//       toggleFollowed: (userId) => {
//          dispatch(toggleFollowedCreator(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersCreator(users))
//       },
//       setTotalCount: (totalCount) => {
//          dispatch(setTotalCountCreator(totalCount));
//       },
//       setPageNumber: (pageNumber) => {
//          dispatch(setCurrentPageCreator(pageNumber));
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingCreator(isFetching));
//       }
//    }
// }

export default connect(mapStateToProps, {
   toggleFollowed,
   setUsers,
   setTotalCount,
   setCurrentPage,
   toggleIsFetching,

})(UsersContainer);