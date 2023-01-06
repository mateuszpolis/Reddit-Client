import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from "./searchBarSlice";
import "./SearchBar.css";

export const SearchBar = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  }

  const handleSubmit = () => {
    
  }

  return (
    <div id="searchBehind">
      <form action={handleSubmit}>
        <input
          type="search"
          placeholder="Type..."
          id="search"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <input type="submit" value="Search" id="submitSearch" />
      </form>
    </div>
  );
};
