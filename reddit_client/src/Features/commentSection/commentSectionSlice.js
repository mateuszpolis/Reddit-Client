import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    },
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
    },
    [loadComments.rejected]: (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = true;
    },
  },
});

export const isLoadingComments = (state) => {
  return state.commentSection.isLoadingComments;
};

export const failedLoadingComments = (state) => {
  return state.commentSection.failedToLoadComments;
};

export const hasLoadedComments = (state) => {
  return state.commentSection.hasLoadedComments;
};

export const selectComments = (state) => {
  return state.commentSection.comments;
};

export const selectCommentsForPostId = (state) => {
  return state.commentSection.commentsForPostId;
};

export const { changeId } = commentSectionSlice.actions;

export default commentSectionSlice.reducer;
