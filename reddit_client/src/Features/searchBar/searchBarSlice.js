import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
    sortBy: "relevance"
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
    }
  },
});

export const selectSearchTerm = (state) => {
  return state.searchBar.value;
};

export const selectSortBy = (state) => {
  return state.searchBar.sortBy;
}

export const { setSearchTerm, clearSearchTerm, setSortBy } = searchBarSlice.actions;

export default searchBarSlice.reducer;
