import React from "react";
import { SearchBar } from "../Features/searchBar/SearchBar";
import "./Header.css";

/**
 * Header container. Contains SearchBar feature and logo
 *
 * @returns
 */
export const Header = () => {
  return (
    <header>
      <SearchBar />
    </header>
  );
};
