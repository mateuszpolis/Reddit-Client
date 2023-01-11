import React from "react";
import { PopularPost } from "../../Components/PopularPost";
import "./Popular.css";

export const Popular = () => {
  const handleScrollRight = () => {
    const wrapper = document.getElementById("popularPosts");
    wrapper.scroll({
      top: 0,
      left: wrapper.scrollLeft + wrapper.offsetWidth / 4,
      behavior: "smooth",
    });
  };

  return (
    <div id="popularPostsContainer">
      <div id="popularPostsTitle">
        <h5>
          Popular <i class="fa-solid fa-fire"></i>
        </h5>
      </div>
      <div id="popularPosts">
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
      </div>
      <div id="clickToScrollRight" onClick={handleScrollRight}>
        <h5>
          <i class="fa-solid fa-caret-right"></i>
        </h5>
      </div>
    </div>
  );
};
