import React from "react";
import { CommentSection } from "../Features/commentSection/CommentSection";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import { SortBy } from "../Features/sortBy/SortBy";
import "./Main.css";

export const Main = () => {
  return (
    <main>
      <Feed />
      <SortBy />
      <PostInformation />
      <CommentSection />
    </main>
  );
};
