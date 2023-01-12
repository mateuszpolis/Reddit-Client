import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../Components/Post";
import "./Feed.css";
import { isLoadingPosts, selectPosts, failedLoadingPosts } from "./feedSlice";
import { truncateText } from "../../helperFunctions/functions";
import { findCurrentPost } from "../postInformation/postinformationSlice";
import { selectSearchTerm } from "../../Features/searchBar/searchBarSlice";

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
  const searchTerm = useSelector(selectSearchTerm);

  const findPostId = () => {
    dispatch(findCurrentPost());
  };

  useEffect(() => {}, [dispatch]);

  if (isLoading) {
    return (
      <div id="feedWrapper">
        <div id="feed" className="isLoading"></div>
      </div>
    );
  } else if (failedLoading) {
    return (
      <div id="feedWrapper">
        <div id="feed" style={{ textAlign: "center" }}>
          <h1 style={{ color: "red" }}>
            Error: Failed to load data. Try again.
          </h1>
        </div>
      </div>
    );
  } else if (firstLoad) {
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
  }
  return (
    <div id="feedWrapper">
      <div id="resultsFor">
        <h5>
          <i className="fa-solid fa-magnifying-glass"></i> Results for:{" "}
          <u>{searchTerm}</u>
        </h5>
      </div>
      <div id="feed" onScroll={findPostId}>
        {posts.map((post) => {
          return (
            <Post
              header={post.title}
              text={truncateText(post.selftext, 1500)}
              link={"https://www.reddit.com" + post.permalink}
              key={post.id}
              image_src={post.url_overridden_by_dest}
              post={post}
            />
          );
        })}
      </div>
    </div>
  );
};
