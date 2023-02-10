import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../Components/Post";
import "./Feed.css";
import {
  isLoadingPosts,
  selectPosts,
  failedLoadingPosts,
  hasLoadedPosts,
  selectNumOfPosts,
  selectCurrentPost,
} from "./feedSlice";
import { selectCurrentResult } from "../../Features/searchBar/searchBarSlice";
import { findCurrentPost } from "./feedSlice";
import { setPermalink } from "../commentSection/commentSectionSlice";

/**
 * Feed feature. Rendres Post components
 *
 * @returns
 */
export const Feed = () => {
  const isLoading = useSelector(isLoadingPosts);
  const failedLoading = useSelector(failedLoadingPosts);
  const hasLoaded = useSelector(hasLoadedPosts);
  const resultsFor = useSelector(selectCurrentResult);
  let posts = useSelector(selectPosts);
  let currentPost = useSelector(selectCurrentPost);
  const numOfPosts = useSelector(selectNumOfPosts);
  const dispatch = useDispatch();

  /**
   * Finds id of currently displayed post and sets its permalink in order for commentSection feature to be able to load appropriate comments
   */
  const findPostId = () => {
    dispatch(findCurrentPost(numOfPosts));
    dispatch(setPermalink(currentPost.permalink));
  };

  useEffect(() => {}, [dispatch]);

  if (failedLoading) {
    return (
      <div id="feedWrapper">
        <div
          id="feed"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "red" }}>
            Error: Failed to load data. Try again.
          </h1>
        </div>
      </div>
    );
  } else if (!hasLoaded && !isLoading) {
    return (
      <div id="feedWrapper">
        <div
          id="feed"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "350%",
              margin: "0 0",
              animation: "searchAnimation 3s linear infinite",
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </h1>
          <h1 style={{ animation: "magnifyForSearch 3s linear infinite" }}>
            Search for something...
          </h1>
        </div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div id="feedWrapper">
        <div id="feed" className="isLoading"></div>
      </div>
    );
  } else if (hasLoaded) {
    posts = posts.data.children.map((post) => {
      return post.data;
    });
    findPostId();
    return (
      <div id="feedWrapper">
        <div id="resultsFor">
          <h5>
            <i className="fa-solid fa-magnifying-glass"></i> Results for:{" "}
            <u>{resultsFor}</u>
          </h5>
        </div>
        <div id="feed" onScroll={findPostId}>
          {posts.map((post) => {
            return <Post post={post} key={post.id + "_key"} />;
          })}
        </div>
      </div>
    );
  }
};
