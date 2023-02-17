import React from "react";

function Search({ value, onType, onEnter }) {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onType}
          onKeyDown={onEnter}
        />
      </div>
    </div>
  );
}

export default Search;
