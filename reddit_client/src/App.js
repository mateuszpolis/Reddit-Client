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

    let vw = window.innerWidth;
    if (vw >= 1024) {
      const commentSection = document.getElementById("postComments");
      const oPost = document.getElementsByClassName("seeOriginalPost")[0];
      oPost.style.opacity = "1";
      commentSection.style.top = "18vh";
      commentSection.style.top = "calc(var(--vh, 1vh) * 18)";
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
