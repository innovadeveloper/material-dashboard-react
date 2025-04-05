import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    DELETE_USER,
  } from '../types';
  
  const usersReducer = (state, action) => {
    console.log("type  " + action.type)
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true };
      case FETCH_USERS_SUCCESS:
        // console.log("FETCH_USERS_SUCCESS ")
        return { ...state, users: action.payload, loading: false };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
export default usersReducer;