import React from "react";
import "./SortBy.css";

export const SortBy = () => {
  const handleMouseEnter = () => {
    const postInfo = document.getElementById("postInfo");
    postInfo.style.top = "30%";
  };

  const handleMouseLeave = () => {
    const postInfo = document.getElementById("postInfo");
    postInfo.style.top = "15%";
  };

  return (
    <div id="sortWrapper">
      <div
        id="sort"
        className="dropdownButton"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h4>Sort</h4>
        <i className="fa-solid fa-sort-down"></i>
      </div>
      <div
        id="relevance"
        className="dropdownButton"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h4>All time</h4>
        <i className="fa-solid fa-sort-down"></i>
      </div>
    </div>
  );
};
