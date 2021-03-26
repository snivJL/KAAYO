import React from "react";

const SearchBar = () => {
  return (
    <form>
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="What are you looking for ?"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
