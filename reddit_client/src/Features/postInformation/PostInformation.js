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
import { handleShowComments } from "../../helperFunctions/functions";

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

  if (isLoading) {
    return <div id="postInfo" className="isLoading"></div>;
  } else if (hasLoaded) {
    return (
      <div id="postInfo">
        <div id="subredditNamePlaceholder">
          <h4>
            <a
              href={"https://www.reddit.com/" + post?.subreddit_name_prefixed}
              target="blank"
            >
              {post?.subreddit_name_prefixed}
            </a>
          </h4>
        </div>
        <div id="userNamePlaceholder">
          <h4>
            <a
              href={"https://www.reddit.com/user/" + post?.author}
              target="blank"
            >
              u/{post?.author}
            </a>
          </h4>
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
        <div id="infoOnMobile">
          <h5>
            Added on <u>{convertDate(post?.created)}</u> by{" "}
            <a
              href={"https://www.reddit.com/user/" + post?.author}
              target="blank"
            >
              u/{post?.author}
            </a>{" "}
            to{" "}
            <a
              href={"https://www.reddit.com/" + post?.subreddit_name_prefixed}
              target="blank"
            >
              {post?.subreddit_name_prefixed}
            </a>
          </h5>
        </div>
      </div>
    );
  }
};
