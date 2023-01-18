import React, { useEffect } from "react";
import "./CommentSection.css";
import { Comment } from "../../Components/Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  selectComments,
  isLoadingComments,
  hasLoadedComments,
  loadComments,
  selectPermalink,
} from "./commentSectionSlice";
import { intToString } from "../../helperFunctions/functions";
import { isLoadingPosts, selectCurrentPost } from "../feed/feedSlice";

/**
 * CommentSection feature. Renders Comment components based on what content is currently displayed to the user
 *
 * @returns
 */
export const CommentSection = () => {
  const isLoading = useSelector(isLoadingComments);
  const hasLoaded = useSelector(hasLoadedComments);
  const isLoadingContent = useSelector(isLoadingPosts);
  const post = useSelector(selectCurrentPost);
  const permalink = useSelector(selectPermalink);
  let comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (permalink !== "") {
      dispatch(loadComments(permalink));
    }
  }, [dispatch, permalink]);

  /**
   * Function to srcoll down through comments
   */
  const handleScrollDown = () => {
    const wrapper = document.getElementById("comments");
    wrapper.scroll({
      top: wrapper.scrollTop + wrapper.offsetHeight / 2,
      left: 0,
      behavior: "smooth",
    });
  };

  if (isLoadingContent) {
    return (
      <div id="postComments">
        <div id="commentsInfo">
          <div id="commentsName">
            <h4>
              <i className="fa-solid fa-comments"></i> Comments
            </h4>
          </div>
        </div>
        <div id="comments" className="isLoading"></div>
      </div>
    );
  } else if (isLoading) {
    return (
      <div id="postComments">
        <div id="commentsInfo">
          <div id="commentsName">
            <h4>
              <i className="fa-solid fa-comments"></i>{" "}
              {intToString(post?.num_comments)} Comments
            </h4>
          </div>
        </div>
        <div id="comments" className="isLoading"></div>
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
              {intToString(post?.num_comments)} Comments
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
        <div id="showMore" onClick={handleScrollDown}>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
    );
  }
};
