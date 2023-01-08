import React from "react";
import "./SortBy.css";

export const SortBy = () => {
  return (
    <div id="sortWrapper">
      <div id="sort" className="dropdownButton">
        <h4>Sort</h4>
        <i className="fa-solid fa-sort-down"></i>
      </div>
      <div id="relevance" className="dropdownButton">
        <h4>All time</h4>
        <i className="fa-solid fa-sort-down"></i>
      </div>
    </div>
  );
};
