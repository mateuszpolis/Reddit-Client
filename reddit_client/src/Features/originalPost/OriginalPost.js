import React from "react";
import "./OriginalPost.css";
import { useSelector } from "react-redux";
import { selectPostPermalink } from "../postInformation/postinformationSlice";
import { prefix } from "@fortawesome/free-regular-svg-icons";

export const OriginalPost = () => {
  const permalink = useSelector(selectPostPermalink);
  console.log(permalink);

  if (permalink === null) {
    return (
      <div
        className="seeOriginalPost"
        id="seeOriginalPostNotLoaded"
        style={{ backgroundColor: "var(--gray-light)" }}
      >
        <h2 style={{ color: "var(--background-light)" }}>
          Original Post <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </h2>
      </div>
    );
  }

  return (
    <div className="seeOriginalPost">
      <a href={"https://www.reddit.com" + permalink} target="blank">
        <h2 style={{ color: "var(--background-light)" }}>
          Original Post <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </h2>
      </a>
    </div>
  );
};
