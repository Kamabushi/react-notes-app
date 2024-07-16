import React from "react";
const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="toggle"
        onClick={() => handleDarkMode((prev) => !prev)}
      >
        Toggle Mode
      </button>
    </div>
  );
};
export default Header;
