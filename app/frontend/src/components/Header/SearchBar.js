import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import productActions from "../../redux/actions/product.actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.getFilteredProducts(keyword));
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <div className="search">
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="What are you looking for ?"
    //         onChange={(e) => setKeyword(e.target.value)}
    //         required
    //       />
    //     </div>
    //   </div>
    // </form>
    <Form onSubmit={handleSubmit} inline className="ml-auto ">
      <FormControl
        type="text"
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 border-green-300 focus:outline-green-300 focus:ring-green-300 focus:shadow"
      />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
  );
};

export default SearchBar;
