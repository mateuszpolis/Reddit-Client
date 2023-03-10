import React from "react";
import "./Subreddits.css";
import { useDispatch } from "react-redux";
import { loadPosts } from "../feed/feedSlice";
import { clearSearchTerm, setCurrentResult } from "../searchBar/searchBarSlice";

/**
 * Subreddits feature. Shows popular subreddits (data is static, it is not loaded from Reddit). Allows to load "hot" posts from said subreddits
 * @returns
 */
export const Subreddits = () => {
  const dispatch = useDispatch();

  /**
   * Dispatches an action to load posts from a subreddit
   * @param {*} e Event target
   */
  const handleSelectTopic = (e) => {
    let topic = e.target.firstChild.textContent;
    topic = topic.toLowerCase().trim();
    const url = `${topic}/hot.json?`;
    dispatch(loadPosts({ url }));
    dispatch(setCurrentResult(topic));
    dispatch(clearSearchTerm());
  };

  return (
    <div id="topicsWrapper">
      <div
        id="topicsTitle"
      >
        <h2 style={{color: "var(--background-light)" }}>
          Popular Subreddits{" "}
          <i className="fa-solid fa-arrow-down-wide-short"></i>
        </h2>
      </div>
      <div id="topics">
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/gaming <i className="fa-solid fa-headset"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/sports <i className="fa-solid fa-futbol"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/programming <i className="fa-solid fa-code"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/CryptoCurrency <i className="fa-brands fa-bitcoin"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/entertainment <i className="fa-solid fa-tv"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/technology <i className="fa-solid fa-microchip"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/Art <i className="fa-solid fa-palette"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/history <i className="fa-solid fa-landmark"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/Music <i className="fa-solid fa-music"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/movies <i className="fa-solid fa-film"></i>
          </h5>
        </div>
      </div>
    </div>
  );
};
