const TOGGLE_FOLLOWED = "TOGGLE_FOLLOWED";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
   users: [],
   pageSize: 4,
   totalCount: 0,
   currentPage: 1,
   isFetching: true,
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

      default:
         return state;
   }

}


export let toggleFollowedCreator = (userId) => ({ type: TOGGLE_FOLLOWED, userId });
export let setUsersCreator = (users) => ({ type: SET_USERS, users });
export let setTotalCountCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export let setCurrentPageCreator = (pageNumber) => ({ type: SET_PAGE_NUMBER, pageNumber });
export let toggleIsFetchingCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;