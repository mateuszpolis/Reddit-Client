import React from "react";
import "./Post.css";
import { Media } from "./Media";
import { truncateText } from "../helperFunctions/functions";

export const Post = ({ post }) => {
  const handleToggleOverflow = () => {
    const pWrapper = document.getElementById(post.id + "d");
    const p = document.getElementById(post.id + "p");
    if (
      pWrapper.style.overflowY === "hidden" ||
      pWrapper.style.overflowY === ""
    ) {
      pWrapper.style.overflowY = "scroll";
      p.innerHTML = post.selftext;
    } else {
      pWrapper.style.overflowY = "hidden";
      p.innerHTML = truncateText(post.selftext, 850);
    }
  };

  const mediaToFullScreen = (e) => {
    const parent = e.target.parentElement;
    if (parent.hasAttribute("magnified")) {
      parent.removeAttribute("magnified");
      setTimeout(() => {
        parent.style.transition = "200ms";
      }, 20);
    } else {
      parent.style.transition = "0s";
      parent.setAttribute("magnified", "true");
    }
  };

  if (post.is_self) {
    return (
      <div className="post" id={post.id}>
        <h2>{post.title}</h2>
        <div
          style={{ height: "76%" }}
          id={post.id + "d"}
          onClick={handleToggleOverflow}
          className="canExpand"
        >
          <p id={post.id + "p"}>{truncateText(post.selftext, 850)} </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="post" id={post.id}>
        <h2>{post.title}</h2>
        <p style={{ maxHeigt: "20%", overflowY: "scroll", margin: "0" }}>
          {post?.selftext}
        </p>
        <div className="canExpand mediaContentWrapper" id={post.id + "img"}>
          <Media post={post} onClick={mediaToFullScreen} />
        </div>
      </div>
    );
  }
};
