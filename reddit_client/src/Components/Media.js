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
      <video className="mediaContent" controls autoPlay muted onClick={onClick}>
        <source src={post.url} type="mp4/video"></source>
      </video>
    );
  } else if (
    post?.post_hint === "hosted:video" ||
    post?.post_hint === "rich:iframe"
  ) {
    return (
      <iframe
        className="mediaContent"
        src={post.media.reddit_video.fallback_url}
        title={post.title}
        controls
        autoPlay="autoplay"
        muted="muted"
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
