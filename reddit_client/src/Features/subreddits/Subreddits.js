import React from "react";
import "./Subreddits.css";
import { useDispatch } from "react-redux";
import { loadPosts } from "../feed/feedSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();

  const handleSelectTopic = (e) => {
    let topic = e.target.firstChild.textContent;
    topic = topic.toLowerCase().trim();
    console.log(typeof topic);
    const url = `${topic}.json`;
    console.log(url);
    dispatch(loadPosts({ url }));
  };

  return (
    <div id="topicsWrapper">
      <div
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "var(--orange)",
          borderTopLeftRadius: "7px",
          borderTopRightRadius: "7px",
        }}
        id="topicsTitle"
      >
        <h2 style={{ marginLeft: "2vw" }}>
          Popular Subreddits <i className="fa-solid fa-bookmark"></i>
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
            r/CelebrityBigAss <i className="fa-solid fa-champagne-glasses"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/technology <i className="fa-solid fa-microchip"></i>
          </h5>
        </div>
        <div className="topic" onClick={handleSelectTopic}>
          <h5>
            r/Art <i className="fa-solid fa-paint-roller"></i>
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
