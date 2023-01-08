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
    isLoadingComments: false,
    failedToLoadComments: false,
    hasLoadedComments: false,
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

export default commentSectionSlice.reducer;
