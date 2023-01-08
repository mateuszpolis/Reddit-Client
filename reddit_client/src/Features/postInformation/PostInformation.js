import React from "react";
import "./PostInformation.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPost } from "./postinformationSlice";

export const PostInformation = () => {
  const dispatch = useDispatch();
  const currentPost = useSelector(selectCurrentPost);

  return (
    <div id="postInfo">
      <div className="informationPart">
        <div id="subredditImgPlaceholder"></div>
        <div id="subredditNamePlaceholder"></div>
        <div id="userNamePlaceholder"></div>
        <div id="datePlaceholder"></div>
      </div>
      <div className="informationPart">
        <i id="upvotes" className="fa-solid fa-heart"></i>
        <div id="numberOfUpvotesPlaceholder"></div>
        <i id="downvotes" className="fa-solid fa-heart-crack"></i>
      </div>
    </div>
  );
};
