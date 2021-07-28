import React from "react";
import Search from "./Search";

function Header({ onSearch, searchValue }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        onSearch = { onSearch }
        searchValue = { searchValue }
      />
    </header>
  );
}

export default Header;
