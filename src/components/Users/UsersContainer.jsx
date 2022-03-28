import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { setCurrentPage, setTotalCount, setUsers, toggleFollowed, toggleIsFetching, } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.setTotalCount(data.totalCount);
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);

            // console.log(response.data.items);

         });
   }

   onpageChange = (e) => {
      this.props.setCurrentPage(+e.target.innerHTML);
      this.props.toggleIsFetching(true);

      usersAPI.getUsers(+e.target.innerHTML, this.props.pageSize)
         .then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
         });
   }

   toggleFollow = (id, follow) => {
      if (!follow) {
         usersAPI.addAsFrind(id)
            .then(response => {
               if (response.data.resultCode === 0) {
                  this.props.toggleFollowed(id);
               }
            })
      } else {
         usersAPI.removeFromFrinds(id)
            .then(response => {
               if (response.data.resultCode === 0) {
                  this.props.toggleFollowed(id);
               }
            })
      }
   }

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onpageChange={this.onpageChange}
               users={this.props.users}
               toggleFollow={this.toggleFollow}
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