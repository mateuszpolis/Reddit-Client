import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
  selectSortBy,
  setSortBy,
  clearSearchTerm,
  setCurrentResult,
} from "./searchBarSlice";
import { loadPosts } from "../feed/feedSlice";
import "./SearchBar.css";

/**
 * SearchBar feature. Allows user to input data and search for said content on Reddit. Also allows to specify sort order of posts
 * @returns
 */
export const SearchBar = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const sortBy = useSelector(selectSortBy);
  const dispatch = useDispatch();

  /**
   * Changes current SearchTerm based on user input
   * @param {*} e Event target
   */
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  /**
   * Dispatches an action to load posts from Reddit based on current SearchTerm
   */
  const handleSubmit = () => {
    if (searchTerm === "") {
    } else {
      const data = {
        searchTerm: searchTerm,
        sortBy: sortBy,
        searchLimit: "25",
      };
      const url = `search.json?q=${data.searchTerm}&sort=${data.sortBy}&limit=${data.searchLimit}`;
      dispatch(loadPosts({ url }));
      dispatch(setCurrentResult(searchTerm));
    }
  };

  /**
   * Displays sort options
   */
  const handleShowSortOptions = () => {
    const dropdown = document.getElementById("sortOptions");
    const sort = document.getElementById("sort");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
      sort.style.borderBottomLeftRadius = "0";
    } else {
      dropdown.style.display = "none";
      sort.style.borderBottomLeftRadius = "3vh";
    }
  };

  /**
   * Sets a new sortBy parameter and dispatches an action to load posts from Reddit based on current SearchTerm and with new sortBy. If no SearchTerm is provided, doesn't load posts
   * @param {*} e Event target
   */
  const handleSelectOption = (e) => {
    let newValue = e.target.innerHTML;
    handleShowSortOptions();
    const dropdown = document.getElementById("sortOptionsUl");
    for (const child of dropdown.children) {
      if (child.hasAttribute("selectedOption")) {
        child.setAttribute("selectedOption", "false");
      }
    }
    e.target.setAttribute("selectedOption", "true");
    if (newValue === "Most Comments") {
      newValue = "comments";
    }
    dispatch(setSortBy(newValue.toLowerCase()));
    const data = {
      searchTerm: searchTerm,
      sortBy: newValue.toLowerCase(),
      searchLimit: "25",
    };
    if (searchTerm.trim() !== "") {
      const url = `search.json?q=${data.searchTerm}&sort=${data.sortBy}&limit=${data.searchLimit}`;
      dispatch(loadPosts({ url }));
    } else {
      console.log("add information, sort only with search term");
    }
  };

  /**
   * Clears input field
   */
  const handleClearSearch = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div>
      <div id="sortOptions">
        <ul id="sortOptionsUl">
          <li onClick={handleSelectOption}>Relevance</li>
          <li onClick={handleSelectOption}>Hot</li>
          <li onClick={handleSelectOption}>Top</li>
          <li onClick={handleSelectOption}>New</li>
          <li onClick={handleSelectOption}>Most Comments</li>
        </ul>
      </div>
      <div
        id="cancelButton"
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "2vh",
          left: "62.5vw",
          height: "6vh",
          zIndex: "2",
          color: "red",
        }}
        onClick={handleClearSearch}
      >
        <h3 style={{ margin: "0" }}>
          <i className="fa-solid fa-xmark"></i>
        </h3>
      </div>
      <div id="searchBehind">
        <div id="sort" onClick={handleShowSortOptions}>
          <h4>sort</h4>
          <i className="fa-solid fa-caret-down"></i>
        </div>
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
    </div>
  );
};
