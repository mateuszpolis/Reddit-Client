import React from "react";
import "./PostInformation.css";

export const PostInformation = () => {
  return (
    <div id="postInfo">
      <div className="informationPart">
        <div id="subredditImgPlaceholder"></div>
        <div id="subredditNamePlaceholder"></div>
        <div id="userNamePlaceholder"></div>
        <div id="datePlaceholder"></div>
      </div>
      <div className="informationPart">
        <div id="upvotes">
          <i className="fa-solid fa-up"></i>
        </div>
        <div id="numberOfUpvotesPlaceholder"></div>
        <div id="downvotes">
          <i className="fa-solid fa-down"></i>
        </div>
      </div>
    </div>
  );
};
