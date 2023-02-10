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
export const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="commentInfo">
        <div className="commentAuthor">
          <h5>u/{comment.data.author}</h5>
        </div>
        <div className="commentUps">
          <h5>
            <i className="fa-solid fa-heart"></i>{" "}
            {intToString(comment.data.ups)}{" "}
            <i className="fa-solid fa-heart-crack"></i>
          </h5>
        </div>
      </div>
      <div className="commentContent">
        <p>{htmlDecode(comment.data.body)}</p>
      </div>
    </div>
  );
};
