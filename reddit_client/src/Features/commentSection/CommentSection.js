import React from "react";
import "./CommentSection.css";
import { Comment } from "../../Components/Comment";
import p from "../../images/photo-1481349518771-20055b2a7b24.jpg";

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
        <Comment
          author="test"
          commentContent="Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. "
          authorPicture={p}
        />
        <Comment author="test" commentContent="test" authorPicture={p} />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
        <Comment author="test" commentContent="test" />
      </div>
      <div id="showMore">
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
};
