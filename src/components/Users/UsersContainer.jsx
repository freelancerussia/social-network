import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { setCurrentPage, setTotalCount, setUsers, toggleFollowed, toggleIsFetching, toggleIsFollowingProgress, getUsers, follow, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   onpageChange = (e) => {
      this.props.setCurrentPage(+e.target.innerHTML);
      this.props.getUsers(+e.target.innerHTML, this.props.pageSize)
   }

   toggleFollow = (id, follow) => {
      // console.log(this.props.isFollowingProgress.some(id => id === id));
      if (!follow) {
         this.props.follow(id);
      } else {
         this.props.unfollow(id);
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
               isFollowingProgress={this.props.isFollowingProgress}
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
      isFollowingProgress: state.usersPage.isFollowingProgress,
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
   getUsers,
   follow,
   unfollow

})(UsersContainer);