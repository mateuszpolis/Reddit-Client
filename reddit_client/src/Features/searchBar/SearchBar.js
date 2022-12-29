import React from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div id="searchBehind">
      <form>
        <input type="search" placeholder="Type..." id="search" />
        <input type="submit" value="Search" id="submitSearch" />
      </form>
    </div>
  );
};
