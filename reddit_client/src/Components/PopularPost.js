import React from "react";
import "./PopularPost.css";

export const PopularPost = ({post}) => {
  return (
    <a className="popularPost" href={post?.url_overridden_by_dest}>
      <img alt={post?.id} src={post?.thumbnail}/>
      <h3>{post?.subreddit_name_prefixed}</h3>
    </a>
  );
};
