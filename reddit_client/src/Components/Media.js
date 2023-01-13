import React from "react";
import "./Media.css";

export const Media = (props) => {
  const { post, onClick } = props;

  if (post?.post_hint === "image") {
    return (
      <img
        className="mediaContent"
        src={post.url}
        alt={post.id}
        onClick={onClick}
      />
    );
  } else if (post?.post_hint === "rich:video") {
    return (
      <video className="mediaContent" autoPlay controls onClick={onClick}>
        <source src={post.url} type="video/mp4"></source>
      </video>
    );
  } else if (post?.post_hint === "hosted:video" || post?.post_hint === "rich:iframe") {
    return (
      <iframe
        className="mediaContent"
        src={post.media.reddit_video.fallback_url}
        title={post.title}
        autoPlay
        controls
        onClick={onClick}
      />
    );
  } else {
    return (
      <img
        className="mediaContent"
        src={post.url}
        alt={post.id}
        onClick={onClick}
      />
    );
  }
};
