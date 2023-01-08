import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.value = action.payload;
    },
    clearSearchTerm: (state, action) => {
      state.value = "";
    },
  },
});

export const selectSearchTerm = (state) => {
  return state.searchBar.value;
};

export const { setSearchTerm, clearSearchTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;
