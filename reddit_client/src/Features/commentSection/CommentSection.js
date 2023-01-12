import React from "react";
import "./CommentSection.css";
import { Comment } from "../../Components/Comment";
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
  isLoadingComments,
  hasLoadedComments,
} from "./commentSectionSlice";
import { changeId } from "./commentSectionSlice";
import { intToString } from "../../helperFunctions/functions";
import { isLoadingPosts } from "../feed/feedSlice";

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
  let comments = useSelector(selectComments);
  const isLoading = useSelector(isLoadingComments);
  const hasLoaded = useSelector(hasLoadedComments);
  const isLoadingContent = useSelector(isLoadingPosts);

  const handleHide = () => {
    const hideButton = document.getElementById("showMore");
    const commentsInfo = document.getElementById("commentsInfo");
    hideButton.setAttribute("isHidden", "true");
    commentsInfo.setAttribute("isHidden", "true");
  };

  if (isLoading || isLoadingContent) {
    return (
      <div id="postComments">
        <div id="commentsInfo">
          <div id="commentsName">
            <h4>
              <i className="fa-solid fa-comments"></i>{" "}
              {intToString(numOfComments)} Comments
            </h4>
          </div>
        </div>
        <div id="comments" className="isLoading"></div>
        <div id="showMore" onClick={handleHide}>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    );
  } else if (hasLoaded) {
    comments = comments[1].data.children;

    return (
      <div id="postComments">
        <div id="commentsInfo">
          <div id="commentsName">
            <h4>
              <i className="fa-solid fa-comments"></i>{" "}
              {intToString(numOfComments)} Comments
            </h4>
          </div>
        </div>
        <div id="comments">
          {comments.map((comment) => {
            return (
              <Comment
                author={comment.data.author}
                upvotesNumber={comment.data.ups}
                commentContent={comment.data.body}
                key={comment.data.id}
              />
            );
          })}
        </div>
        <div id="showMore" onClick={handleHide}>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    );
  }
};
