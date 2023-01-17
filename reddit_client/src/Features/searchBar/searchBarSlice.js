import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
    sortBy: "relevance",
    currentResult: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.value = action.payload;
    },
    clearSearchTerm: (state, action) => {
      state.value = "";
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCurrentResult: (state, action) => {
      state.currentResult = action.payload;
    },
  },
});

export const selectSearchTerm = (state) => {
  return state.searchBar.value;
};

export const selectSortBy = (state) => {
  return state.searchBar.sortBy;
};

export const selectCurrentResult = (state) => {
  return state.searchBar.currentResult;
};

export const { setSearchTerm, clearSearchTerm, setSortBy, setCurrentResult } =
  searchBarSlice.actions;

export default searchBarSlice.reducer;
