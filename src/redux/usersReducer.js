import { usersAPI } from "../api/api";

const TOGGLE_FOLLOWED = "TOGGLE_FOLLOWED";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
   users: [],
   pageSize: 4,
   totalCount: 0,
   currentPage: 1,
   isFetching: true,
   isFollowingProgress: []
};

function usersReducer(state = initialState, action) {
   switch (action.type) {

      case TOGGLE_FOLLOWED:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: !u.followed }
               }
               return u;
            })
         }

      case SET_USERS:
         return {
            ...state,
            // users: [...state.users, ...action.users] ыдвет ошибку при вызовет setUsers, отрисовывает по два элемента нового массива
            users: [...action.users]
         }
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.totalCount
         }
      case SET_PAGE_NUMBER:
         return {
            ...state,
            currentPage: action.pageNumber
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            isFollowingProgress: action.isFetching
               ? [...state.isFollowingProgress, action.id]
               : state.isFollowingProgress.filter(id => id !== action.id)
         }

      default:
         return state;
   }

}


export let toggleFollowed = (userId) => ({ type: TOGGLE_FOLLOWED, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export let setCurrentPage = (pageNumber) => ({ type: SET_PAGE_NUMBER, pageNumber });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleIsFollowingProgress = (isFetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id });

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize)
         .then(data => {
            dispatch(setTotalCount(data.totalCount));
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
         });
   }
}
export const follow = (userId) => {
   return (dispatch) => {
      dispatch(toggleIsFollowingProgress(true, userId));
      usersAPI.addAsFrind(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(toggleFollowed(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));

         })
   }
}
export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(toggleIsFollowingProgress(true, userId));
      usersAPI.removeFromFrinds(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(toggleFollowed(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));

         })
   }
}

export default usersReducer;