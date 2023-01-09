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

  const handleScrollTop = () => {
    const parentElement = document.getElementById("comments");
    parentElement.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
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
        <div id="comments" className="isLoading"></div>
        <div id="showMore" onClick={handleScrollTop}>
          <i className="fa-solid fa-caret-up"></i>
        </div>
      </div>
    );
  } else if (hasLoaded) {
    comments = comments[1].data.children;

    return (
      <div id="postComments">
        <div id="commentsInfo">
          <div id="commentsName">
            <h3>
              <i className="fa-solid fa-comments"></i> Comments
            </h3>
          </div>
          <div id="numOfCommentsPlaceholder">
            <h3>{numOfComments}</h3>
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
        <div id="showMore" onClick={handleScrollTop}>
          <i className="fa-solid fa-caret-up"></i>
        </div>
      </div>
    );
  } else {
    return (
      <div id="postComments">
        <div id="commentsInfo">
          <div id="commentsName">
            <h3>
              <i className="fa-solid fa-comments"></i> Comments
            </h3>
          </div>
          <div id="numOfCommentsPlaceholder">
            <h3>{numOfComments}</h3>
          </div>
        </div>
        <div id="comments"></div>
        <div id="showMore" onClick={handleScrollTop}>
          <i className="fa-solid fa-caret-up"></i>
        </div>
      </div>
    );
  }
};
