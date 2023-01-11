import React from "react";
import "./Popular.css";

export const Popular = () => {
  const handleScrollRight = () => {
    const wrapper = document.getElementById("popularPosts");
    wrapper.scroll({
      top: 0,
      left: wrapper.scrollLeft + (wrapper.offsetWidth / 4),
      behavior: "smooth",
    });
  };

  return (
    <div id="popularPostsContainer">
      <div id="popularPosts">
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
        <div className="popularPost"></div>
      </div>
      <div id="clickToScrollRight" onClick={handleScrollRight}>
        <h5>
          <i class="fa-solid fa-caret-right"></i>
        </h5>
      </div>
    </div>
  );
};
