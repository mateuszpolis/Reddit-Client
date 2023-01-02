import React from "react";
import { SearchBar } from "../Features/searchBar/SearchBar";
import "./Header.css";
import redditLogo from "../images/Reddit_logo_new.svg.png";

export const Header = () => {
  return (
    <header>
      <img alt="Reddit logo" src={redditLogo} />
      <SearchBar />
    </header>
  );
};