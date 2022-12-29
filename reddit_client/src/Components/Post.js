import React from "react";
import "./Post.css";

export const Post = (props) => {
  return (
    <div className="post">
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <img alt={props.id} src={props.image}/>
    </div>
  )
}