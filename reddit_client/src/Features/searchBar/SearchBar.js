import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
  clearSearchTerm,
} from "./searchBarSlice";
import "./SearchBar.css";

export const SearchBar = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const handleSubmit = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="searchBehind">
      <input
        type="search"
        placeholder="Type..."
        id="search"
        onChange={handleInputChange}
        value={searchTerm}
      />
      <div id="submitSearch" onClick={handleSubmit}>
        <h4>Search</h4>
      </div>
    </div>
  );
};
