import React from "react";
import { MdSearch } from "react-icons/md";
const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3cm" />
      <input
        type="text"
        placeholder="Type to search for the note"
        onChange={(e) => handleSearchNote(e.target.value)}
      ></input>
    </div>
  );
};
export default SearchBar;
