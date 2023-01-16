import React from "react";
import { SearchBar } from "../Features/searchBar/SearchBar";
import "./Header.css";
import redditLogo from "../images/Reddit_logo_new.svg.png";

export const Header = () => {
  return (
    <header>
      <h1 style={{margin: "0", marginLeft: "2vw"}}>
        <i className="fa-brands fa-reddit"></i>
        Reddit Client
      </h1>
      <SearchBar />
    </header>
  );
};
