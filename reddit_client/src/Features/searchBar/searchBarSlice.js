import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: ""
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const selectSearchTerm = (state) => {
  return state.searchBar.value;
}

export const {
  setSearchTerm
} = searchBarSlice.actions;

export default searchBarSlice.reducer;