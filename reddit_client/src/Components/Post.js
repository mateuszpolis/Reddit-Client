import React from "react";
import "./Post.css";
import { Media } from "./Media";
import { htmlDecode, truncateText } from "../helperFunctions/functions";

/**
 * Takes in post object and returns a post component with content varrying based on post's properties
 *
 * @param {*} param0 Post object
 * @returns
 */
export const Post = ({ post }) => {
  /**
   * Changes overflow property of post's pWrapper element to make all of the text visible on scroll
   */
  const handleToggleOverflow = () => {
    const pWrapper = document.getElementById(post.id + "d");
    const p = document.getElementById(post.id + "p");
    if (
      pWrapper.style.overflowY === "hidden" ||
      pWrapper.style.overflowY === ""
    ) {
      pWrapper.style.overflowY = "scroll";
      p.innerHTML = htmlDecode(post.selftext);
    } else {
      pWrapper.style.overflowY = "hidden";
      p.innerHTML = truncateText(htmlDecode(post.selftext), 850);
    }
  };

  /**
   * Magnifies an element by changing its parent's dimensions and display
   *
   * @param {*} e Event target
   */
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
        <h2>{htmlDecode(post.title)}</h2>
        <div
          style={{ height: "76%", width: "100%" }}
          id={post.id + "d"}
          onClick={handleToggleOverflow}
          className="canExpand"
        >
          <p id={post.id + "p"}>
            {truncateText(htmlDecode(post.selftext), 830)}{" "}
          </p>
        </div>
      </div>
    );
  } else if (
    post.is_self === false &&
    (!post.hasOwnProperty("post_hint") || post?.post_hint === "link")
  ) {
    return (
      <div className="post" id={post.id}>
        <h2 style={{ maxHeight: "40%" }}>{htmlDecode(post.title)}</h2>
        <div
          style={{ maxHeight: "40%" }}
          id={post.id + "d"}
          onClick={handleToggleOverflow}
          className="canExpand"
        >
          <a id={post.id + "a"} href={post.url} target="blank">
            {post.url}{" "}
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="post" id={post.id}>
        <h2>{htmlDecode(post.title)}</h2>
        <p style={{ maxHeigt: "20%", overflowY: "scroll", margin: "0" }}>
          {htmlDecode(post?.selftext)}
        </p>
        <div className="canExpand mediaContentWrapper" id={post.id + "img"}>
          <Media post={post} onClick={mediaToFullScreen} />
        </div>
      </div>
    );
  }
};
