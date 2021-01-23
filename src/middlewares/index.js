import axios from "axios";
import axiosRetry from "axios-retry";
import { SERVICE_ROUTES } from "../config/constants";

const noop = () => {
  console.log("in response callback"); // eslint-disable-line no-console
};

const callApi = (
  endpoint,
  httpMethod,
  headers,
  requestBody,
  queryParams,
  withCredentials,
  retry,
  delay,
  responseCallback = noop
) => {
  if (retry) {
    axiosRetry(axios, {
      retries: retry, // number of retries after first retry
      retryDelay: retryCount => {
        return retryCount * delay; // time interval between retries
      },
      retryCondition: error => {
        // if retry condition is not specified, by default idempotent requests are retried
        return error.response.status;
      }
    });
  }

  return axios({
    method: httpMethod,
    url: endpoint,
    data: requestBody,
    params: queryParams,
    timeout: 10000,
    withCredentials,
    headers,
    transformResponse: axios.defaults.transformResponse.concat(data => {
      responseCallback(data);
      return data;
    })
  })
    .then(response => response.data)
    .catch(error => {
      if (error && error.response && error.response.status === 403) {
        window.location.replace(SERVICE_ROUTES.USER_LOGIN);
      }
      if (!error.response) {
        window.location.reload();
      }
      throw error;
    });
};

export const CALL_API = "Call API";

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === "undefined") {
    return next(action);
  }

  const {
    endpoint,
    types,
    httpMethod,
    headers,
    requestBody,
    queryParams,
    withCredentials,
    retry,
    delay,
    responseCallback
  } = callAPI;

  if (typeof endpoint !== "string") {
    throw new Error("Specify a string endpoint URL.");
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected an array of three action types.");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expected action types to be strings.");
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType, requestBody }));

  return callApi(
    endpoint,
    httpMethod,
    headers,
    requestBody,
    queryParams,
    withCredentials,
    retry,
    delay,
    responseCallback
  ).then(
    response =>
      next(
        actionWith({
          response,
          requestBody,
          type: successType
        })
      ),

    error =>
      next(
        actionWith({
          type: failureType,
          requestBody,
          error
        })
      )
  );
};