import React from "react";
import "./CommentSection.css";
import { Comment } from "../../Components/Comment";
import p from "../../images/photo-1481349518771-20055b2a7b24.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPostId,
  selectNumOfComments,
  selectPostPermalink,
} from "../postInformation/postinformationSlice";
import {
  selectCommentsForPostId,
  loadComments,
  selectComments,
} from "./commentSectionSlice";
import { changeId } from "./commentSectionSlice";

export const CommentSection = () => {
  const dispatch = useDispatch();
  const numOfComments = useSelector(selectNumOfComments);
  const permalink = useSelector(selectPostPermalink);
  const currentId = useSelector(selectCommentsForPostId);
  const newId = useSelector(selectCurrentPostId);
  if (permalink !== null && currentId !== newId) {
    dispatch(loadComments(permalink));
    dispatch(changeId());
  }
  const comments = useSelector(selectComments);

  const handleScrollTop = () => {
    const parentElement = document.getElementById("comments");
    parentElement.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="postComments">
      <div id="commentsInfo">
        <div id="commentsName">
          <h3>
            <i className="fa-solid fa-comments"></i> Comments
          </h3>
        </div>
        <div id="numOfCommentsPlaceholder" className="canLoad">
          <h3>{numOfComments}</h3>
        </div>
      </div>
      <div id="comments" className="canLoad">
        <Comment
          author="test"
          commentContent="Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. "
          authorPicture={p}
        />
      </div>
      <div id="showMore" onClick={handleScrollTop}>
        <i className="fa-solid fa-caret-up"></i>
      </div>
    </div>
  );
};
