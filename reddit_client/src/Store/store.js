import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import feedReducer from "../Features/feed/feedSlice";
import postInformationReducer from "../Features/postInformation/postinformationSlice";

export const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
        feed: feedReducer,
        postInformation: postInformationReducer
    },
});
