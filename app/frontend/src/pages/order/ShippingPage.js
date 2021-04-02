import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import orderActions from "../../redux/actions/order.actions";
import CheckoutSteps from "../../components/CheckoutSteps";

const ShippingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.postalCode) {
      errors.postalCode = "Required";
      if (!values.country) {
        errors.country = "Required";
      }
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      postalCode: "",
      city: "",
      country: "",
      ward: "",
      district: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(orderActions.saveShippingAddress(values));
      history.push("/order/payment");
    },
  });

  return (
    <Container>
      <CheckoutSteps step1 />
      <Row className="justify-content-center ">
        <Col md={6}>
          {/* {auth.error && <Alert variant="warning">{auth.error.msg}</Alert>} */}

          <Form
            onSubmit={formik.handleSubmit}
            className="align-items-center border rounded p-4"
          >
            <h2 className="text-center">Shipping Details</h2>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div>{formik.errors.address}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formGroupText">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? (
                <div>{formik.errors.city}</div>
              ) : null}
            </Form.Group>
            <Form.Group
              className="flex items-center justify-center"
              controlId="formGroupText"
            >
              <div className="flex flex-col">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  name="postalCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.postalCode}
                />
              </div>
              <div className="flex flex-col">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="District"
                  name="district"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
                />
              </div>
              <div className="flex flex-col">
                <Form.Label>Ward (optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ward"
                  name="ward"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ward}
                />{" "}
              </div>
            </Form.Group>
            <Form.Group controlId="formGroupText">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <div>{formik.errors.country}</div>
              ) : null}
            </Form.Group>
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-green-300 text-gray-700 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingPage;
