import React from "react";
import { Link } from "react-router-dom";
import productActions from "../../redux/actions/product.actions";
import { useDispatch } from "react-redux";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

const CategoriesPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-14 bg-green-600 w-full border-t border-gray-100 grid md:grid-cols-1 text-gray-100 items-center justify-center px-4  sm:grid-cols-1">
      <ul className="flex justify-self-center panel-list">
        <li className="flex items-center space-x-3 ">
          <Dropdown as={ButtonGroup}>
            <Link to="/shop/soap">
              <Button
                onClick={() =>
                  dispatch(
                    productActions.getFilteredProducts(
                      undefined,
                      undefined,
                      "soap"
                    )
                  )
                }
                className="bg-transparent border-none outline-none focus:outline-none focus:border-none"
              >
                Soaps
              </Button>
            </Link>

            <Dropdown.Toggle
              split
              className="bg-transparent border-none outline-none focus:outline-none"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/shop/clay-soap">
                <div
                  className="transform transition ease "
                  onClick={() =>
                    dispatch(
                      productActions.getFilteredProducts(
                        undefined,
                        undefined,
                        "Clay Soap"
                      )
                    )
                  }
                >
                  Clay Soap
                </div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/shop/charcoal-soap">
                <div
                  className="transform transition ease"
                  onClick={() =>
                    dispatch(
                      productActions.getFilteredProducts(
                        undefined,
                        undefined,
                        "Charcoal Soap"
                      )
                    )
                  }
                >
                  Charcoal Soap
                </div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/shop/spice-soap">
                <div
                  className="transform transition ease "
                  onClick={() =>
                    dispatch(
                      productActions.getFilteredProducts(
                        undefined,
                        undefined,
                        "Spice Soap"
                      )
                    )
                  }
                >
                  Spice Soap
                </div>
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/shop/baby-soap">
                <div
                  className="transform transition ease "
                  onClick={() =>
                    dispatch(
                      productActions.getFilteredProducts(
                        undefined,
                        undefined,
                        "Baby Soap"
                      )
                    )
                  }
                >
                  Baby Soap
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div>/</div>
        </li>
        <li className="flex items-center space-x-3  pl-3">
          <Link to={`/shop/body-butter`}>
            <div
              className="transform transition ease "
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Body Butter"
                  )
                )
              }
            >
              Body Butter
            </div>
          </Link>
          <div>/</div>
        </li>

        <li className="flex items-center space-x-3 pl-3 ">
          <Link to="/shop/lip-balm">
            <div
              className="transform transition ease"
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Lip Balm"
                  )
                )
              }
            >
              Lip Balms
            </div>
          </Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 ">
          <Link to="/shop/shampoo-bar">
            <div
              className="transform transition ease"
              onClick={() =>
                dispatch(
                  productActions.getFilteredProducts(
                    undefined,
                    undefined,
                    "Shampoo Bar"
                  )
                )
              }
            >
              Shampoo Bars
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesPanel;
