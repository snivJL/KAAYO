import React, { useState } from "react";
import productActions from "../../redux/actions/product.actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) history.push(`/search/${keyword}`);
    else history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="What are you looking for ?"
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
