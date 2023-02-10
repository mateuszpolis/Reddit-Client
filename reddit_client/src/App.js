import React from "react";
import "./App.css";
import "./Components/ScrollBar.css";
import { Header } from "./Containers/Header";
import { Main } from "./Containers/Main";
import { Footer } from "./Containers/Footer";

function App() {
  /**
   * Fixes the problem of vh not working as intended on some mobile browsers
   */
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const commentSection = document.getElementById("postComments");
    const likeIcon = document.getElementById("upvotesOnMoblie");
    const commentButton = document.getElementById("openCommentsButton");
    const oPost = document.getElementsByClassName("seeOriginalPost")[0];
    let vw = window.innerWidth;
    if (vw >= 1024) {
      if (!document.getElementById("seeOriginalPostNotLoaded")) {
        commentSection.style.top = "18vh";
        commentSection.style.top = "calc(var(--vh, 1vh) * 18)";
        oPost.style.opacity = "1";
      }
    } else {
      if (!document.getElementById("seeOriginalPostNotLoaded")) {
        commentSection.style.top = "95vh";
        likeIcon.style.opacity = "1";
        commentButton.style.opacity = "1";
        oPost.style.opacity = "1";
      }
    }
  });

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
