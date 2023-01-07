import React from "react";
import "./Post.css";

export const Post = (props) => {
  return (
    <div className="post">
      <h3>{props.header}</h3>
      <p>{props.text}</p>
      <a href={props.link} target="blank">
        See post
      </a>
      <img alt={props.id} src={props.image} />
    </div>
  );
};
