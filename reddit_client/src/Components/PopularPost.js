import React from "react";
import "./PopularPost.css";
import nsfw from "../images/popularPostNSFWBackground.jpg";
import selfDefault from "../images/popularPostSelfDefaultBackground.jpg";

export const PopularPost = ({ post }) => {
  if (post?.thumbnail === "self") {
    return (
      <a
        className="popularPost"
        href={"https://www.reddit.com" + post?.permalink}
        target="blank"
      >
        <img alt={post?.id} src={selfDefault} />
        <h3>{post?.subreddit_name_prefixed}</h3>
      </a>
    );
  } else if (post?.thumbnail === "default") {
    return (
      <a
        className="popularPost"
        href={"https://www.reddit.com" + post?.permalink}
        target="blank"
      >
        <img alt={post?.id} src={selfDefault} />
        <h3>{post?.subreddit_name_prefixed}</h3>
      </a>
    );
  } else if (post?.thumbnail === "nsfw") {
    return (
      <a
        className="popularPost"
        href={"https://www.reddit.com" + post?.permalink}
        target="blank"
      >
        <img alt={post?.id} src={nsfw} />
        <h3>{post?.subreddit_name_prefixed}</h3>
      </a>
    );
  } else if (post?.thumbnail === "image") {
    return (
      <a
        className="popularPost"
        href={"https://www.reddit.com" + post?.permalink}
        target="blank"
      >
        <img alt={post?.id} src={post?.url} />
        <h3>{post?.subreddit_name_prefixed}</h3>
      </a>
    );  
  }
  return (
    <a
      className="popularPost"
      href={"https://www.reddit.com" + post?.permalink}
      target="blank"
    >
      <img alt={post?.id} src={post?.thumbnail} />
      <h3>{post?.subreddit_name_prefixed}</h3>
    </a>
  );
};
