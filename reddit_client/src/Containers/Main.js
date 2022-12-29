import React from "react";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <PostInformation />
      <Feed />
      <div id="postComments"></div>
    </main>
  );
};
