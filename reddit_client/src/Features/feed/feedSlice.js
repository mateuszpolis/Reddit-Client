import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../searchBar/searchBarSlice";

export const loadPosts = createAsyncThunk("feed/loadPosts", async (data) => {
  const { searchTerm, sortBy, searchLimit } = data;
  const response = await fetch(
    `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
  );

  const json = await response.json();
  return json;
});

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    posts: {},
    isLoadingPosts: false,
    failedToLoadPosts: false,
  },
  extraReducers: {
    [loadPosts.pending]: (state, action) => {
      state.isLoadingPosts = true;
      state.failedToLoadPosts = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = false;
      state.posts = action.payload;
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

export const selectPosts = (state) => {
  return state.feed.posts;
};

export default feedSlice.reducer;
