import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import feedReducer from "../Features/feed/feedSlice";

export const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
        feed: feedReducer
    },
});
