import React from "react";
import { getSource } from "../helperFunctions/functions";
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
    const src = getSource(post.media_embed.content);
    return (
      <iframe
        className="mediaContent"
        src={src}
        title={post.title}
        controls
        autoPlay="autoplay"
        muted="muted"
        onClick={onClick}
      />
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
