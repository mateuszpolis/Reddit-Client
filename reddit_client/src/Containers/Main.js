import React from "react";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <div id="postInfo"></div>
      <div id="previousPost" className="post"></div>
      <div id="currentPost" className="post"></div>
      <div id="nextPost" className="post"></div>
      <div id="postComments"></div>
    </main>
  );
};
