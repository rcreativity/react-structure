const SERVICE_ROUTES = Object.freeze({
  GET_POSTS: `https://jsonplaceholder.typicode.com/posts`,
  POST_POSTS: `https://jsonplaceholder.typicode.com/posts`,
  SINGLE_POSTS: `https://jsonplaceholder.typicode.com/comments`
})

const HTTP_HEADER_JSON = {
  "Content-Type": "application/json"
};

export  {
  SERVICE_ROUTES,
  HTTP_HEADER_JSON
}