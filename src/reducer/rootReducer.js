import { combineReducers } from "redux";
import postReducer from './todo'
import singlePostReducer from './SingleTodo'
import postPostReducer from './postReducer'

export default combineReducers({
  postReducer,
  singlePostReducer,
  postPostReducer
})
