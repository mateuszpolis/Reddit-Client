import React from "react";
import { CommentSection } from "../Features/commentSection/CommentSection";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import { Popular } from "../Features/popular/Popular";
import "./Main.css";
import { Subreddits } from "../Features/subreddits/Subreddits";

export const Main = () => {
  return (
    <main>
      <Popular />
      <Subreddits />
      <Feed />
      <PostInformation />
      <CommentSection />
    </main>
  );
};
