import React from "react";
import "./Post.css";
import { Media } from "./Media";
import { truncateText } from "../helperFunctions/functions";
export const Post = (props) => {
  return (
    <div className="post">
      <div className="postText">
        <h3>{props.header}</h3>
        <p>{truncateText(props.text, 950)}</p>
        <a href={props.link} target="blank">
          See post
        </a>
      </div>
      <Media post={props.post} />
    </div>
  );
};
