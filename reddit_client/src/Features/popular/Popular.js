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
import { hasLoadedPosts, isLoadingPosts } from "../feed/feedSlice";

/**
 * Popular feature. Displays post currently popular on Reddit and renders PopularPost components which link to said posts on Reddit
 * @returns
 */
export const Popular = () => {
  const isLoading = useSelector(isLoadingPopularPosts);
  const hasLoaded = useSelector(hasLoadedPopularPosts);
  const isLoadingContent = useSelector(isLoadingPosts);
  const hasLoadedContent = useSelector(hasLoadedPosts);
  let posts = useSelector(selectPopularPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopular());
  }, [dispatch]);

  /**
   * Scrolls through popular posts
   */
  const handleScrollRight = () => {
    const wrapper = document.getElementsByClassName("popularPosts")[0];
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

  if (isLoading && (hasLoadedContent || isLoadingContent)) {
    return (
      <div id="popularPostsContainer">
        <div className="popularPosts isLoading"></div>
      </div>
    );
  } else if (isLoading && !hasLoadedContent) {
    return (
      <div id="popularPostsContainer">
        <div className="popularPosts isLoading" id="firstLoadPopular"></div>
      </div>
    );
  } else if (hasLoaded && (hasLoadedContent || isLoadingContent)) {
    return (
      <div id="popularPostsContainer">
        <div className="popularPostsTitle">
          <h5>
            Popular <i className="fa-solid fa-fire"></i>
          </h5>
        </div>
        <div className="popularPosts">
          {posts.map((post) => {
            return <PopularPost post={post} key={post.id} />;
          })}
        </div>
        <div className="clickToScrollRight" onClick={handleScrollRight}>
          <h5>
            <i className="fa-solid fa-caret-right"></i>
          </h5>
        </div>
      </div>
    );
  } else if (hasLoaded && !hasLoadedContent) {
    return (
      <div id="popularPostsContainer">
        <div className="popularPostsTitle" id="popularPostsTitleFirstLoad">
          <h5>
            Popular <i className="fa-solid fa-fire"></i>
          </h5>
        </div>
        <div className="popularPosts" id="firstLoadPopular">
          {posts.map((post) => {
            return <PopularPost post={post} key={post.id} />;
          })}
        </div>
        <div
          className="clickToScrollRight"
          id="clickToScrollRightFirstLoad"
          onClick={handleScrollRight}
        >
          <h5>
            <i className="fa-solid fa-caret-right"></i>
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
