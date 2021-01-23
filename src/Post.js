import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import getPosts from './actions/todo'
import postTodo from './actions/postTodo'

export default function Post() {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state);
  console.log(todo)

  const submitPost = () => {
     dispatch(postTodo({
        "userId": 1,
        "id": 1,
        "title": "hi",
        "body": "hi"
     }));
  }

  useEffect(()=>{
    dispatch(getPosts());
  },[])

  return (
    <div>
      post

      <button onClick={submitPost}>post article</button>
    </div>
  )
}
