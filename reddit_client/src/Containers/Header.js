import React from "react";
import { SearchBar } from "../Features/searchBar/SearchBar";
import "./Header.css";
import logo from "../../src/images/logo_transparent.png";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo"/>
      <SearchBar />
    </header>
  );
};
