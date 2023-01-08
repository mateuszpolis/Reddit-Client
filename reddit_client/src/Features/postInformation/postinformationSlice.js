import { createSlice } from "@reduxjs/toolkit";

export const postInformationSlice = createSlice({
  name: "postInformation",
  initialState: {
    currentPost: {},
    isLoadingPostData: false,
    failedToLoadPostData: false,
  },
  reducers: {
    findCurrentPost: (state, action) => {
      for (const post of action.payload) {
        const distanceToTop =
          window.pageYOffset + post.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        console.log(distanceToTop);
        console.log(windowHeight);
        if (distanceToTop / windowHeight <= 0.2) {
          state.currentPost = post;
          console.log(post);
          break;
        }
      }
    },
  },
});

export const selectCurrentPost = (state) => {
  return state.postInformation.currentPost;
};

export const { findCurrentPost } = postInformationSlice.actions;

export default postInformationSlice.reducer;
