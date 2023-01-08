import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectCurrentPostId } from "../postInformation/postinformationSlice";

export const loadComments = createAsyncThunk(
  "commentSection/loadComments",
  async (permalink) => {
    const response = await fetch(`https://www.reddit.com/${permalink}.json`);

    const json = await response.json();
    return json;
  }
);

export const commentSectionSlice = createSlice({
  name: "commentSection",
  initialState: {
    comments: {},
    commentsForPostId: -1,
    isLoadingComments: false,
    failedToLoadComments: false,
    hasLoadedComments: false,
  },
  reducers: {
    changeId: (state, action) => {
      const feedElement = document.getElementById("feed");
      const feedHeight = feedElement.scrollHeight;
      const scrolled = feedElement.scrollTop;
      const id = Math.floor(scrolled / (feedHeight / 25));
      state.commentsForPostId = id;
    }
  },
  extraReducers: {
    [loadComments.pending]: (state, action) => {
      state.isLoadingComments = true;
      state.failedToLoadComments = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
      state.hasLoadedComments = true;
      state.comments = action.payload;
      console.log(action.payload[1].data.children);
    },
    [loadComments.rejected]: (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = true;
    },
  },
});

export const isLoadingComments = (state) => {
  return state.feed.isLoadingComments;
};

export const failedLoadingComments = (state) => {
  return state.feed.failedToLoadComments;
};

export const hasLoadedComments = (state) => {
  return state.feed.hasLoadedComments;
};

export const selectComments = (state) => {
  return state.commentSection.comments;
};

export const selectCommentsForPostId = (state) => {
  return state.commentSection.commentsForPostId;
}

export const { changeId } = commentSectionSlice.actions;

export default commentSectionSlice.reducer;
