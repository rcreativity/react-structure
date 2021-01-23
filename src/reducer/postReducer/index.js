import * as actionTypes from "../../actions/postTodo/actionTypes";

const initialState = {
  isLoadingPosts: true,
  isErrorPosts: false,
  status: ""
};

const postPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTS_POST_REQUEST:
      return {
        ...state,
        isLoadingPosts: true,
        isErrorPosts: false
      };

    case actionTypes.POSTS_POST_SUCCESS:
      return {
        ...state,
        status: '200',
        isLoadingPosts: false,
        isErrorPosts: false
      };

    case actionTypes.POSTS_POST_FAILED:
      return {
        ...state,
        isLoadingPosts: false,
        isErrorPosts: true,
        status: ""
      };

    default:
      return state;
  }
};

export default postPostReducer;
