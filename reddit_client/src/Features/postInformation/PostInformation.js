import React, { useEffect } from "react";
import "./PostInformation.css";
import { useDispatch, useSelector } from "react-redux";
import {
  findCurrentPost,
  selectPostInformation,
} from "./postinformationSlice";
import { hasLoadedPosts, isLoadingPosts } from "../feed/feedSlice";
import picture from "../../images/photo-1481349518771-20055b2a7b24.jpg";

export const PostInformation = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingPosts);
  const hasLoaded = useSelector(hasLoadedPosts);
  if (hasLoaded) {
    dispatch(findCurrentPost());
  }
  const data = useSelector(selectPostInformation);

  useEffect(() => {}, [dispatch]);

  if (isLoading) {
    return (
      <div id="postInfo">
        <div className="informationPart">
          <div id="subredditImgPlaceholder" className="isLoading"></div>
          <div id="subredditNamePlaceholder" className="isLoading"></div>
          <div id="userNamePlaceholder" className="isLoading"></div>
          <div id="datePlaceholder" className="isLoading"></div>
        </div>
        <div className="informationPart">
          <i id="upvotes" className="fa-solid fa-heart"></i>
          <div id="numberOfUpvotesPlaceholder" className="isLoading"></div>
          <i id="downvotes" className="fa-solid fa-heart-crack"></i>
        </div>
      </div>
    );
  } else if (hasLoaded) {
    return (
      <div id="postInfo">
        <div className="informationPart">
          <div id="subredditImgPlaceholder">
            <img alt="subreddit logo" src={picture}/>
          </div>
          <div id="subredditNamePlaceholder" className="centerText">{data.subredditName}</div>
          <div id="userNamePlaceholder" className="centerText">u/{data.userName}</div>
          <div id="datePlaceholder" className="centerText">Added: {data.date}</div>
        </div>
        <div className="informationPart">
          <i id="upvotes" className="fa-solid fa-heart"></i>
          <div id="numberOfUpvotesPlaceholder">{data.votes}</div>
          <i id="downvotes" className="fa-solid fa-heart-crack"></i>
        </div>
      </div>
    );
  } else {
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
  }
};
