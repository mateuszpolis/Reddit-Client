import React from "react";
import { PostInformation } from "../Features/postInformation/PostInformation";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <PostInformation />
      <div id="previousPost" className="post"></div>
      <div id="currentPost" className="post"></div>
      <div id="nextPost" className="post"></div>
      <div id="postComments"></div>
    </main>
  );
};
