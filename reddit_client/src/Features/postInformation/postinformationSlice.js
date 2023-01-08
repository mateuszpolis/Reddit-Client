import { createSlice } from "@reduxjs/toolkit";
import { convertDate } from "../../helperFunctions/functions";

export const postInformationSlice = createSlice({
  name: "postInformation",
  initialState: {
    currentPostId: -1,
  },
  reducers: {
    findCurrentPost: (state, action) => {
      const feedElement = document.getElementById("feed");
      const feedHeight = feedElement.scrollHeight;
      const scrolled = feedElement.scrollTop;
      const id = Math.floor(scrolled / (feedHeight / 25));
      state.currentPostId = id;
    },
  },
});

export const selectCurrentPostId = (state) => {
  return state.postInformation.currentPostId;
};

export const selectPostInformation = (state) => {
  const id = state.postInformation.currentPostId;
  if (id === -1) {
    return null;
  }
  const post = state.feed.posts.data.children.map((post) => {
    return post.data;
  })[id];
  const data = {
    subredditImg: "",
    subredditName: post.subreddit_name_prefixed,
    userName: post.author,
    date: convertDate(post.created),
    votes: post.ups,
  };
  return data;
};

export const selectNumOfComments = (state) => {
  const id = state.postInformation.currentPostId;
  if (id === -1) {
    return null;
  }
  const post = state.feed.posts.data.children.map((post) => {
    return post.data;
  })[id];
  return post.num_comments;
}

export const { findCurrentPost } = postInformationSlice.actions;

export default postInformationSlice.reducer;
