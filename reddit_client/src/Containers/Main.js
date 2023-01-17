import React from "react";
import { CommentSection } from "../Features/commentSection/CommentSection";
import { Feed } from "../Features/feed/Feed";
import { PostInformation } from "../Features/postInformation/PostInformation";
import { Popular } from "../Features/popular/Popular";
import "./Main.css";
import { Subreddits } from "../Features/subreddits/Subreddits";
import { OriginalPost } from "../Features/originalPost/OriginalPost";

/**
 * Main container. Contains Popular, Subreddits, OriginalPost, Feed, Postinformation and CommentSection features
 * 
 * @returns 
 */
export const Main = () => {
  return (
    <main>
      <Popular />
      <Subreddits />
      <OriginalPost />
      <Feed />
      <PostInformation />
      <CommentSection />
    </main>
  );
};
