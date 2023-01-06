import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchBar/searchBarSlice";

export const loadPosts = createAsyncThunk(
  "feed/loadPosts",
  async (id, thunkAPI) => {
    const response = await fetch(`http://www.reddit.com/search.json?q=${selectSearchTerm}`);
    const json = await response.json();
    return json;
  }
);

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
      state.failedToLoadPosts = true;
      state.posts = action.payload;
      console.log(state.posts);
    },
    [loadPosts.rejected]: (state, action) => {
      state.isLoadingPosts = true;
      state.failedToLoadPosts = false;
    },
  },
});

export const isLoadingPosts = state => {
  return state.feed.isLoadingPosts;
}

export const selectPosts = state => {
  return state.posts;
} 

export default feedSlice.reducer;
