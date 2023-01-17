import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import feedReducer from "../Features/feed/feedSlice";
import commentSectionReducer from "../Features/commentSection/commentSectionSlice";
import poppularReducer from "../Features/popular/popularSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    feed: feedReducer,
    commentSection: commentSectionReducer,
    popular: poppularReducer,
  },
});
