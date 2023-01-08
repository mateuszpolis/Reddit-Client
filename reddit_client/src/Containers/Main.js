import React from "react";
import { CommentSection } from "../Features/commentSection/CommentSection";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <Feed />
      <PostInformation />
      <CommentSection />
    </main>
  );
};
