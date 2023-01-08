import React from "react";
import "./Comment.css";

export const Comment = (props) => {
  return (
    <div className="comment">
      <div className="commentAuthor">
        <img alt="profile_picture" src={props.authorPicture}></img>
        <h5>{props.author}</h5>
      </div>
      <div className="commentContentWrapper">
        <div className="commentUpvoteInfo">
          <i className="fa-solid fa-heart commentUpvote"></i>
          <div className="commentUpvotesNumber canLoad">
            {props.upvotesNumber}
          </div>
          <i className="fa-solid fa-heart-crack commentDownvote"></i>
        </div>
        <div className="commentContent">
          <p>{props.commentContent}</p>
        </div>
      </div>
    </div>
  );
};
