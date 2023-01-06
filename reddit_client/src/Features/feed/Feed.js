import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../Components/Post";
import "./Feed.css";
import { isLoadingPosts, selectPosts } from "./feedSlice";

export const Feed = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(isLoadingPosts);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  if (isLoading) {
    return <div id="feed" className="isLoading"></div>;
  }
  return <div id="feed"></div>;
};
