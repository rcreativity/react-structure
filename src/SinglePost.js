import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import getSinglePosts from './actions/singleTodo'

export default function SinglePost() {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state);
  console.log(todo)

  useEffect(()=>{
    dispatch(getSinglePosts(1));
  },[])
  return (
    <div>
      post
    </div>
  )
}
