import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk("feed/loadPosts", async (data) => {
  const { url } = data;
  const response = await fetch(`https://www.reddit.com/${url}`);
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
    currentPostId: -1,
  },
  reducers: {
    findCurrentPost: (state, action) => {
      const feedElement = document.getElementById("feed");
      const feedHeight = feedElement.scrollHeight;
      const scrolled = feedElement.scrollTop;
      const id = Math.floor(scrolled / (feedHeight / action.payload));
      state.currentPostId = id;
    },
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
      if (
        state.posts.data.children.map((post) => {
          return post.data;
        }).length === 0
      ) {
        state.failedToLoadPosts = true;
        state.hasLoadedPosts = false;
      }
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

export const selectCurrentPostId = (state) => {
  return state.feed.currentPostId;
};

export const selectCurrentPost = (state) => {
  const id = state.feed.currentPostId;
  if (id === -1) {
    return false;
  }
  const post = state.feed.posts.data.children.map((post) => {
    return post.data;
  })[id];
  return post;
};

export const { findCurrentPost } = feedSlice.actions;

export default feedSlice.reducer;
