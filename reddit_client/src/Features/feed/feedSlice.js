import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk("feed/loadPosts", async (data) => {
  const { url } = data;
  const response = await fetch(`http://www.reddit.com/${url}`);
  const json = await response.json();
  return json;
});

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    posts: {},
    isLoadingPosts: false,
    failedToLoadPosts: false,
    hasLoadedPosts: false,
    numOfPosts: 0,
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.isLoadingPosts = true;
      state.failedToLoadPosts = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = false;
      state.hasLoadedPosts = true;
      state.posts = action.payload;
      state.numOfPosts = state.posts.data.children.map((post) => {
        return post.data;
      }).length;
      console.log(
        state.posts.data.children.map((post) => {
          return post.data;
        })
      );
    },
    [loadPosts.rejected]: (state, action) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = true;
    },
  },
});

export const isLoadingPosts = (state) => {
  return state.feed.isLoadingPosts;
};

export const failedLoadingPosts = (state) => {
  return state.feed.failedToLoadPosts;
};

export const hasLoadedPosts = (state) => {
  return state.feed.hasLoadedPosts;
};

export const selectPosts = (state) => {
  return state.feed.posts;
};

export const selectNumOfPosts = (state) => {
  return state.feed.numOfPosts;
};

export default feedSlice.reducer;
