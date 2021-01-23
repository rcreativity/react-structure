import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILED
} from "./actionTypes";
import { CALL_API } from "../../middlewares/index";
import { SERVICE_ROUTES, HTTP_HEADER_JSON } from "../../config/constants";

const getSinglePosts = (postId) => ({
  [CALL_API]: {
    types: [
      POSTS_REQUEST,
      POSTS_SUCCESS,
      POSTS_FAILED
    ],
    endpoint: SERVICE_ROUTES.SINGLE_POSTS,
    httpMethod: "get",
    requestBody: {},
    queryParams: { postId },
    withCredentials: false,
    headers: HTTP_HEADER_JSON
  }
});

export default getSinglePosts;