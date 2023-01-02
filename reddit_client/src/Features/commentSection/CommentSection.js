import React from "react";
import "./CommentSection.css";
import { Comment } from "../../Components/Comment";

export const CommentSection = () => {
  return (
    <div id="postComments">
      <div id="commentsInfo">
        <div id="commentsName">
          <h3>
            <i className="fa-solid fa-comments"></i> Comments
          </h3>
        </div>
        <div id="numOfCommentsPlaceholder" className="canLoad">
          <h3>5000</h3>
        </div>
      </div>
      <div id="comments">
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
        <Comment author="test" commentContent="test"/>
      </div>
      <div id="showMore">
        <i class="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
};
