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
    currentPermalink: "",
  },
  reducers: {
    setPermalink: (state, action) => {
      state.currentPermalink = action.payload;
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

export const selectPermalink = (state) => {
  return state.commentSection.currentPermalink;
};

export const { setPermalink } = commentSectionSlice.actions;

export default commentSectionSlice.reducer;
