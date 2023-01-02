import React from "react";
import "./Comment.css";

export const Comment = (props) => {
  return (
    <div className="comment">
      <div className="commentAuthor">
        <img alt="profile_picture" src={props.authorPicture}></img>
        <h5>{props.author}</h5>
      </div>
      <p>{props.commentContent}</p>
    </div>
  );
};
