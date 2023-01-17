import React from "react";
import { intToString } from "../helperFunctions/functions";
import { htmlDecode } from "../helperFunctions/functions";
import "./Comment.css";

/**
 * Takes in information about comment, returns reusable comment div
 *
 * @param {} props Information about comment: author, ups, content
 * @returns
 */
export const Comment = (props) => {
  return (
    <div className="comment">
      <div className="commentAuthor">
        <h5>u/{props.author}</h5>
      </div>
      <div className="commentContentWrapper">
        <div className="commentUpvoteInfo">
          <i className="fa-solid fa-heart commentUpvote"></i>
          <div className="commentUpvotesNumber canLoad">
            {intToString(props.upvotesNumber)}
          </div>
          <i className="fa-solid fa-heart-crack commentDownvote"></i>
        </div>
        <div className="commentContent">
          <p>{htmlDecode(props.commentContent)}</p>
        </div>
      </div>
    </div>
  );
};
