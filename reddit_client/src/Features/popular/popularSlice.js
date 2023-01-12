import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPopular = createAsyncThunk(
  "popular/loadPopular",
  async () => {
    const response = await fetch(
      `https://www.reddit.com/r/popular.json?`
    );

    const json = await response.json();
    return json;
  }
);

export const popularSlice = createSlice({
  name: "popular",
  initialState: {
    popularPosts: {},
    isLoadingPopularPosts: false,
    failedToLoadPopularPosts: false,
    hasLoadedPopularPosts: false,
  },
  extraReducers: {
    [loadPopular.pending]: (state, action) => {
      state.isLoadingPopularPosts = true;
      state.failedToLoadPosts = false;
    },
    [loadPopular.fulfilled]: (state, action) => {
      state.isLoadingPopularPosts = false;
      state.failedToLoadPopularPosts = false;
      state.hasLoadedPopularPosts = true;
      state.popularPosts = action.payload;
    },
    [loadPopular.rejected]: (state, action) => {
      state.isLoadingPopularPosts = false;
      state.failedToLoadPopularPosts = true;
    },
  },
});

export const isLoadingPopularPosts = (state) => {
  return state.popular.isLoadingPopularPosts;
};

export const failedLoadingPopularPosts = (state) => {
  return state.popular.failedToLoadPopularPosts;
};

export const hasLoadedPopularPosts = (state) => {
  return state.popular.hasLoadedPopularPosts;
};

export const selectPopularPosts = (state) => {
  return state.popular.popularPosts;
};

export default popularSlice.reducer;
