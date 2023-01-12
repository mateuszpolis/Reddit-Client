import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  selectSearchTerm,
  selectSortBy,
  setSortBy,
  clearSearchTerm,
} from "./searchBarSlice";
import { loadPosts } from "../feed/feedSlice";
import "./SearchBar.css";

export const SearchBar = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const sortBy = useSelector(selectSortBy);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const handleSubmit = () => {
    if (searchTerm === "") {
    } else {
      const data = {
        searchTerm: searchTerm,
        sortBy: sortBy,
        searchLimit: "25",
      };
      dispatch(loadPosts(data));
    }
  };

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

  const handleSelectOption = (e) => {
    let newValue = e.target.innerHTML;
    handleShowSortOptions();
    const dropdown = document.getElementById("sortOptionsUl");
    for (const child of dropdown.children) {
      if (child.hasAttribute("selected")) {
        child.setAttribute("selected", "false");
      }
    }
    e.target.setAttribute("selected", "true");
    dispatch(setSortBy(newValue));
    if (newValue === "Most Comments") {
      newValue = "comments";
    }
    const data = {
      searchTerm: searchTerm,
      sortBy: newValue.toLowerCase(),
      searchLimit: "25",
    };
    dispatch(loadPosts(data));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div>
      <div id="sortOptions">
        <ul id="sortOptionsUl">
          <li onClick={handleSelectOption} selected="true">
            Relevance
          </li>
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
        }}
        onClick={handleClearSearch}
      >
        <h3 style={{ margin: "0" }}>
          <i class="fa-solid fa-xmark"></i>
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
