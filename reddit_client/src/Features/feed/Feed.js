import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../Components/Post";
import "./Feed.css";
import {
  isLoadingPosts,
  selectPosts,
  failedLoadingPosts,
  loadPosts,
} from "./feedSlice";
import { clearSearchTerm } from "../searchBar/searchBarSlice";
import { truncateText } from "../../helperFunctions/functions";
import { findCurrentPost } from "../postInformation/postinformationSlice";

export const Feed = () => {
  const dispatch = useDispatch();
  let posts = useSelector(selectPosts);
  let firstLoad = false;
  if (Object.keys(posts).length === 0) {
    firstLoad = true;
  } else {
    posts = posts.data.children.map((post) => {
      return post.data;
    });
  }
  const isLoading = useSelector(isLoadingPosts);
  const failedLoading = useSelector(failedLoadingPosts);

  const findPostId = () => {
    dispatch(findCurrentPost());
  };

  useEffect(() => {}, [dispatch]);

  if (isLoading) {
    return <div id="feed" className="isLoading"></div>;
  } else if (failedLoading) {
    return (
      <div id="feed" style={{ textAlign: "center" }}>
        <h1 style={{ color: "red" }}>Error: Failed to load data. Try again.</h1>
      </div>
    );
  } else if (firstLoad) {
    return <div id="feed"></div>;
  }
  return (
    <div id="feed" onScroll={findPostId}>
      {posts.map((post) => {
        return (
          <Post
            header={post.title}
            text={truncateText(post.selftext, 1500)}
            link={"https://www.reddit.com/" + post.permalink}
            key={post.id}
            image_src={post.url_overridden_by_dest}
          />
        );
      })}
    </div>
  );
};
