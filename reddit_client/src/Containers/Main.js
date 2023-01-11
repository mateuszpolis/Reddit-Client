import React from "react";
import { CommentSection } from "../Features/commentSection/CommentSection";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import { Popular } from "../Features/popular/Popular";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <Popular />
      <Feed />
      <PostInformation />
      <CommentSection />
    </main>
  );
};
