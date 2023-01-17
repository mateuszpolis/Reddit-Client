import React, { useEffect } from "react";
import "./OriginalPost.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPostPermalink } from "../postInformation/postinformationSlice";

export const OriginalPost = () => {
  const permalink = useSelector(selectPostPermalink);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  if (permalink === null) {
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
