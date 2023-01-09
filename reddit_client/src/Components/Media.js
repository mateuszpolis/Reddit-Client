import React from "react";
import "./Media.css";

export const Media = (props) => {
  const { post } = props;
  const post_id = post.id;
  const source = post.url;
  const post_hint = post?.post_hint;
  console.log(post.url);

  if (post_hint === "image") {
    return (
      <div className="postMedia">
        <img alt={post_id} src={source} />
      </div>
    );
  } else if (post_hint === "rich:video") {
    return (
      <div className="postMedia">
        <video loop autoPlay controls muted>
					<source src={post.url} type='video/mp4'></source>
				</video>
      </div>
    );
  } else if (post_hint === "rich:iframe") {
    return (
      <div className="postMedia">
        <iframe src={source} title={post_id} autoPlay muted></iframe>
      </div>
    );
  } else if (post_hint === "hosted:video") {
    return (
      <div className="postMedia">
        <iframe src={post.media.reddit_video.fallback_url} title={post.title} autoPlay muted/>
      </div>
    );
  } else {
    return (
      <div style={{ height: 0 }} className="postMedia">
        <img />
      </div>
    );
  }
};
