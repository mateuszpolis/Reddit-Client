import React from "react";
import { CommentSection } from "../Features/commentSection/CommentSection";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import { Popular } from "../Features/popular/Popular";
import "./Main.css";
import { Topics } from "../Features/topics/Topics";

export const Main = () => {
  return (
    <main>
      <Popular />
      <Topics />
      <Feed />
      <PostInformation />
      <CommentSection />
    </main>
  );
};
