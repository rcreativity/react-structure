import * as actionTypes from "../../actions/todo/actionTypes";

const initialState = {
  isLoadingPosts: true,
  isErrorPosts: false,
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTS_REQUEST:
      return {
        ...state,
        isLoadingPosts: true,
        isErrorPosts: false
      };

    case actionTypes.POSTS_SUCCESS:
      return {
        ...state,
        posts: action.response,
        isLoadingPosts: false,
        isErrorPosts: false
      };

    case actionTypes.POSTS_FAILED:
      return {
        ...state,
        isLoadingPosts: false,
        isErrorPosts: true,
        posts: []
      };

    default:
      return state;
  }
};

export default postReducer;
