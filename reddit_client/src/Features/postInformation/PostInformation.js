import React, { useEffect } from "react";
import "./PostInformation.css";
import { useDispatch, useSelector } from "react-redux";
import { findCurrentPost, selectPostInformation } from "./postinformationSlice";
import { hasLoadedPosts, isLoadingPosts } from "../feed/feedSlice";
import picture from "../../images/photo-1481349518771-20055b2a7b24.jpg";
import { intToString } from "../../helperFunctions/functions";

export const PostInformation = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingPosts);
  const hasLoaded = useSelector(hasLoadedPosts);
  if (hasLoaded) {
    dispatch(findCurrentPost());
  }
  const data = useSelector(selectPostInformation);

  useEffect(() => {}, [dispatch]);

  if (isLoading) {
    return <div id="postInfo" className="isLoading"></div>;
  } else if (hasLoaded) {
    return (
      <div id="postInfo">
        <div id="subredditNamePlaceholder" style={{ display: "inline-block" }}>
          <h4>{data.subredditName}</h4>
        </div>
        <div
          id="userNamePlaceholder"
          style={{
            display: "inline-block",
            position: "absolute",
            right: "1vw",
          }}
        >
          <h4>u/{data.userName}</h4>
        </div>
        <div id="numberOfUpvotesPlaceholder" style={{ margin: "2.7vh 0" }}>
          <h4>
            Upvotes: <i id="upvotes" className="fa-solid fa-heart"></i>{" "}
            {intToString(data.votes)}{" "}
            <i id="downvotes" className="fa-solid fa-heart-crack"></i>
          </h4>
        </div>
        <div id="datePlaceholder">
          <h5>
            Added: <u>{data.date}</u>
          </h5>
        </div>
      </div>
    );
  } else {
    return <div id="postInfo"></div>;
  }
};
