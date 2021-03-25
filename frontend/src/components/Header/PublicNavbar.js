import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import authActions from "../../redux/actions/auth.actions";
import userActions from "../../redux/actions/user.actions";

const AuthLinks = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <DropdownButton id="dropdown-basic-button" title={name}>
        <Dropdown.Item onClick={() => dispatch(authActions.logout())}>
          Logout
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </li>
  );
};
const AdminLinks = () => {
  return (
    <li>
      <DropdownButton id="dropdown-basic-button" title="Manage">
        <Dropdown.Item as={Link} to="/admin/product/create">
          Create Product
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/admin/product/list">
          List Products
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/admin/order/list">
          List Orders
        </Dropdown.Item>
      </DropdownButton>
    </li>
  );
};
const GuestLinks = () => {
  return (
    <>
      <Link to="/login">
        <li className="navbar-nav-link border-r border-green-300 pr-2 hover:text-gray-400">
          <i className="fas fa-sign-in-alt mr-2"></i>Sign In
        </li>
      </Link>
      <Link to="/register">
        <li className="navbar-nav-link border-r border-green-300 pr-2 hover:text-gray-400">
          Register
        </li>
      </Link>
    </>
  );
};

const PublicNavbar = () => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  const user = useSelector((state) => state.user.user);
  const { role, name, loading } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getCurrentUser());
  }, [dispatch]);
  return (
    <div className="h-24 bg-green-100 w-full grid md:grid-cols-3 text-gray-700 items-center justify-center px-4 relative sm:grid-cols-1">
      <ul className="flex space-x-3 font-light">
        {isAuthenticated && !loading ? (
          <AuthLinks name={name} />
        ) : (
          <GuestLinks />
        )}
        {role === "admin" && <AdminLinks />}
        <li>
          <SearchBar />
        </li>
      </ul>
      <Link className="justify-self-center mx-auto" to="/">
        <div className="text-4xl ">KA.A.YO</div>
      </Link>
      <div className="justify-self-end">
        <Link to="/cart">
          <i className="fas fa-shopping-cart hover:text-gray-400"></i>
        </Link>
      </div>
    </div>
  );
};

export default PublicNavbar;
