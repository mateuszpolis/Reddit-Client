import React, { useEffect } from "react";
import { PopularPost } from "../../Components/PopularPost";
import "./Popular.css";
import { useDispatch, useSelector } from "react-redux";
import {
  hasLoadedPopularPosts,
  isLoadingPopularPosts,
  loadPopular,
  selectPopularPosts,
} from "./popularSlice";

export const Popular = () => {
  const isLoading = useSelector(isLoadingPopularPosts);
  const hasLoaded = useSelector(hasLoadedPopularPosts);
  let posts = useSelector(selectPopularPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = {
      geoFilter: "US",
      searchLimit: "10",
    };
    dispatch(loadPopular(data));
  }, []);

  const handleScrollRight = () => {
    const wrapper = document.getElementById("popularPosts");
    wrapper.scroll({
      top: 0,
      left: wrapper.scrollLeft + wrapper.offsetWidth / 4,
      behavior: "smooth",
    });
  };

  if (hasLoaded) {
    posts = posts.data.children.map((post) => {
      return post.data;
    });
  }

  if (isLoading) {
    return (
      <div id="popularPostsContainer">
        <div id="popularPosts" className="isLoading"></div>
      </div>
    );
  } else if (hasLoaded) {
    return (
      <div id="popularPostsContainer">
        <div id="popularPostsTitle">
          <h5>
            Popular <i class="fa-solid fa-fire"></i>
          </h5>
        </div>
        <div id="popularPosts">
          {posts.map((post) => {
            return <PopularPost post={post} key={post.id} />;
          })}
        </div>
        <div id="clickToScrollRight" onClick={handleScrollRight}>
          <h5>
            <i class="fa-solid fa-caret-right"></i>
          </h5>
        </div>
      </div>
    );
  } else {
    return (
      <div id="popularPostsContainer">
        <div id="popularPosts" className="isLoading"></div>
      </div>
    );
  }
};
