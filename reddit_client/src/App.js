import React from "react";
import "./App.css";
import "./Components/ScrollBar.css";
import { Header } from "./Containers/Header";
import { Main } from "./Containers/Main";
import { Footer } from "./Containers/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
