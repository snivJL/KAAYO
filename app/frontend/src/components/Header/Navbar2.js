import React from "react";
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import authActions from "../../redux/actions/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
const Navbar2 = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);
  const { cart } = order;
  const { isAuthenticated } = auth;
  const { userInfo } = auth;

  return (
    <Navbar expand="lg" className="font-semibold	bg-white uppercase">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mr-auto flex items-center">
          <Image
            src="https://res.cloudinary.com/dilv93gvb/image/upload/v1617415483/kaayo/logo_whty9b.png"
            fluid
            style={{ height: "6rem" }}
          />
          KA.A.YO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="tracking-wide ml-6">
            {/* <Nav.Link className="navbar-nav-link" as={Link} to="/">
              Home
            </Nav.Link> */}
            <Nav.Link className="navbar-nav-link" as={Link} to="/about">
              Our beginning
            </Nav.Link>
            <Nav.Link className="navbar-nav-link" as={Link} to="/about">
              Ingredients
            </Nav.Link>
            <Nav.Link className="navbar-nav-link" as={Link} to="/shop">
              Shop
            </Nav.Link>
            {/* <NavDropdown
              className="navbar-nav-link"
              title="Shop"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <SearchBar />

          <Nav.Link className="text-gray-700">
            <NavDropdown
              title={<i className="fas fa-user"></i>}
              id="basic-nav-dropdown"
            >
              {isAuthenticated ? (
                <>
                  {userInfo.role === "admin" ? (
                    <NavDropdown.Item
                      as={Link}
                      onClick={() => dispatch(authActions.setAdminMode())}
                      to="/admin/dashboard"
                    >
                      Admin Dashboard
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item as={Link} to="/myorders">
                      My orders
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item
                    onClick={() => dispatch(authActions.logout())}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Create Account
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav.Link>
          <Nav className="text-sm">
            <Nav.Link as={Link} to="/cart" className=" navbar-cart">
              <i className="fas fa-shopping-bag mr-1"></i>
              <div className="relative">
                My bag
                <div className="flex items-center justify-center bg-green-500  text-white p-2 text-xs border border-white h-5 w-5 rounded-full absolute -right-5 -top-3">
                  {cart.reduce((acc, item) => acc + item.qty, 0)}
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
