import React from "react";
import "./OriginalPost.css";
import { useSelector } from "react-redux";
import { selectPermalink } from "../commentSection/commentSectionSlice";

/**
 * A button to redirect to original post on Reddit of currently displayed post
 * @returns
 */
export const OriginalPost = () => {
  const permalink = useSelector(selectPermalink);

  if (permalink === "") {
    return (
      <div className="seeOriginalPost" id="seeOriginalPostNotLoaded">
        <h2 style={{ color: "var(--background-light)" }}>
          Original Post{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </h2>
      </div>
    );
  }

  return (
    <div className="seeOriginalPost">
      <a href={"https://www.reddit.com" + permalink} target="blank">
        <h2 style={{ color: "var(--background-light)" }}>
          Original Post{" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </h2>
      </a>
    </div>
  );
};
