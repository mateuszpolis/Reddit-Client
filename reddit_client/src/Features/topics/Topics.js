import React from "react";
import "./Topics.css";

export const Topics = () => {
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
          Topics <i class="fa-solid fa-bookmark"></i>
        </h2>
      </div>
      <div id="topics">
        <div className="topic">
          <h5>
            Gaming <i class="fa-solid fa-headset"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Sports <i class="fa-solid fa-futbol"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Programming <i class="fa-solid fa-code"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Crypto <i class="fa-brands fa-bitcoin"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Television <i class="fa-solid fa-tv"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Celebrity <i class="fa-solid fa-champagne-glasses"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Technology <i class="fa-solid fa-microchip"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Art <i class="fa-solid fa-paint-roller"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            History <i class="fa-solid fa-landmark"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Music <i class="fa-solid fa-music"></i>
          </h5>
        </div>
        <div className="topic">
          <h5>
            Movies <i class="fa-solid fa-film"></i>
          </h5>
        </div>
      </div>
    </div>
  );
};
