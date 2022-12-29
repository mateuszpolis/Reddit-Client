import React from "react";
import "./PostInformation.css";

export const PostInformation = () => {
  return (
    <div id="postInfo">
      <div className="informationPart">
        <div id="subredditImgPlaceholder" className="canLoad"></div>
        <div id="subredditNamePlaceholder" className="canLoad"></div>
        <div id="userNamePlaceholder" className="canLoad"></div>
        <div id="datePlaceholder" className="canLoad"></div>
      </div>
      <div className="informationPart">
        <i id="upvotes" className="fa-solid fa-heart"></i>
        <div id="numberOfUpvotesPlaceholder" className="canLoad"></div>
        <i id="downvotes" className="fa-solid fa-heart-crack"></i>
      </div>
    </div>
  );
};
