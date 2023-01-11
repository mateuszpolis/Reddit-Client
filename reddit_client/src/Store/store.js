import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Features/searchBar/searchBarSlice";
import feedReducer from "../Features/feed/feedSlice";
import postInformationReducer from "../Features/postInformation/postinformationSlice";
import commentSectionReducer from "../Features/commentSection/commentSectionSlice";
import poppularReducer from "../Features/popular/popularSlice";

export const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
        feed: feedReducer,
        postInformation: postInformationReducer,
        commentSection: commentSectionReducer,
        popular: poppularReducer
    },
});
