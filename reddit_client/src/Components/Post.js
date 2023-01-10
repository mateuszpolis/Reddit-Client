import React from "react";
import "./Post.css";
import { Media } from "./Media";
import { truncateText } from "../helperFunctions/functions";

export const Post = ({ post }) => {
  const handleShowMore = () => {
    const pWrapper = document.getElementById(post.id + "d");
    const p = document.getElementById(post.id + "p");
    console.log(pWrapper.style.height);
    if (
      pWrapper.style.height === "fit-content" ||
      pWrapper.style.height === ""
    ) {
      pWrapper.style.height = "75%";
      pWrapper.style.overflowY = "scroll";
      p.innerHTML = post.selftext;
    } else {
      pWrapper.style.height = "fit-content";
      pWrapper.style.overflowY = "hidden";
      p.innerHTML = truncateText(post.selftext, 1000);
    }
  };

  const handleToggleOverflow = () => {
    const pWrapper = document.getElementById(post.id + "d");
    const p = document.getElementById(post.id + "p");
    console.log(pWrapper.style.height);
    if (
      pWrapper.style.height === "fit-content" ||
      pWrapper.style.height === ""
    ) {
      pWrapper.style.overflowY = "scroll";
      p.innerHTML = post.selftext;
    } else {
      pWrapper.style.overflowY = "hidden";
      p.innerHTML = truncateText(post.selftext, 100);
    }
  };

  if (post.is_self) {
    return (
      <div className="post isSelf" id={post.id}>
        <h2>{post.title}</h2>
        <div className="isSelftext" id={post.id + "d"} onClick={handleShowMore}>
          <p id={post.id + "p"}>{truncateText(post.selftext, 1000)} </p>
        </div>
      </div>
    );
  } else if (post?.post_hint === "image") {
    if (post.selftext.length !== 0) {
      return (
        <div className="post isImage" id={post.id}>
          <h2>{post.title}</h2>
          <div
            className="isImageText"
            id={post.id + "d"}
            onClick={handleToggleOverflow}
          >
            <p id={post.id + "p"}>{truncateText(post.selftext, 100)} </p>
          </div>
          <div className="imageWrapper" id={post.id + "img"}>
            <img src={post.url} alt={post.id} />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="post">
      <div className="postText">
        <h3>{post.title}</h3>
        <p>{truncateText(post.selftext, 950)}</p>
        <a href={post.url_overridden_by_dest} target="blank">
          See post
        </a>
      </div>
      <Media post={post} />
    </div>
  );
};
