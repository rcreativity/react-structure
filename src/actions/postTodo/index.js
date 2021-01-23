import {
  POSTS_POST_REQUEST,
  POSTS_POST_SUCCESS,
  POSTS_POST_FAILED
} from "./actionTypes";
import { CALL_API } from "../../middlewares/index";
import { SERVICE_ROUTES, HTTP_HEADER_JSON } from "../../config/constants";

const postPosts = (userId, id, title, body) => ({
  [CALL_API]: {
    types: [
      POSTS_POST_REQUEST,
      POSTS_POST_SUCCESS,
      POSTS_POST_FAILED
    ],
    endpoint: SERVICE_ROUTES.POST_POSTS,
    httpMethod: "post",
    requestBody: { userId, id, title, body },
    queryParams: { },
    withCredentials: false,
    headers: HTTP_HEADER_JSON
  }
});

export default postPosts;