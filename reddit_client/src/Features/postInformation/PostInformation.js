import React, { useEffect } from "react";
import "./PostInformation.css";
import { useDispatch, useSelector } from "react-redux";
import {
  hasLoadedPosts,
  isLoadingPosts,
  selectCurrentPost,
} from "../feed/feedSlice";
import { intToString } from "../../helperFunctions/functions";
import { convertDate } from "../../helperFunctions/functions";

/**
 * PostInformation feature. Displays information about currently displayed post (subreddit, user, upvotes, date).
 * @returns
 */
export const PostInformation = () => {
  const isLoading = useSelector(isLoadingPosts);
  const hasLoaded = useSelector(hasLoadedPosts);
  const post = useSelector(selectCurrentPost);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const handleShowComments = () => {
    const commentSection = document.getElementById("postComments");
    const likeIcon = document.getElementById("upvotesOnMoblie");
    const commentButton = document.getElementById("openCommentsButton");
    if (
      commentSection.style.top === "95vh" ||
      commentSection.style.top === undefined
    ) {
      commentSection.style.top = "25vh";
      likeIcon.style.opacity = "0";
      commentButton.style.opacity = "0";
    } else {
      commentSection.style.top = "95vh";
      likeIcon.style.opacity = "1";
      commentButton.style.opacity = "1";
    }
  };

  if (isLoading) {
    return <div id="postInfo" className="isLoading"></div>;
  } else if (hasLoaded) {
    return (
      <div id="postInfo">
        <div id="subredditNamePlaceholder">
          <h4>{post?.subreddit_name_prefixed}</h4>
        </div>
        <div id="userNamePlaceholder">
          <h4>u/{post?.author}</h4>
        </div>
        <div id="upvotesOnMoblie">
          <i id="upvotes" className="fa-solid fa-heart"></i>
          {intToString(post?.ups)}
        </div>
        <div id="openCommentsButton" onClick={handleShowComments}>
          <i className="fa-solid fa-comment"></i>
          {intToString(post?.num_comments)}
        </div>
        <div id="numberOfUpvotesPlaceholder">
          <h4>
            Upvotes: <i id="upvotes" className="fa-solid fa-heart"></i>{" "}
            {intToString(post?.ups)}{" "}
            <i id="downvotes" className="fa-solid fa-heart-crack"></i>
          </h4>
        </div>
        <div id="datePlaceholder">
          <h5>
            Added: <u>{convertDate(post?.created)}</u>
          </h5>
        </div>
      </div>
    );
  }
};
