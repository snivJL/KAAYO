import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import orderActions from "../../redux/actions/order.actions";
import CheckoutSteps from "../../components/CheckoutSteps";

const PaymentPage = () => {
  const history = useHistory();

  const shippingAddress = useSelector((state) => state.order.shippingAddress);
  if (!shippingAddress) history.push("/order/shipping");
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.paymentMethod) {
      errors.paymentMethod = "Required";
    }

    return errors;
  };
  return (
    <Formik
      initialValues={{
        paymentMethod: "",
      }}
      onSubmit={async (values) => {
        dispatch(orderActions.savePaymentMethod(values));
        history.push("/order/finalize");
      }}
    >
      {({ touched, errors }) => (
        <div className="container mx-auto">
          <CheckoutSteps step1 step2 />
          <div className="max-w-xl mx-auto bg-white pb-6 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-4 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Payment Method
              </h1>
            </div>
            <div className="m-7">
              <Form>
                <div
                  className="category-label mb-3 flex flex-col "
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <label>
                    <Field type="checkbox" name="paymentMethod" value="Cash" />
                    Cash
                  </label>

                  <label>
                    <Field
                      type="checkbox"
                      name="paymentMethod"
                      value="Paypal"
                    />
                    Paypal
                  </label>

                  <label>
                    <Field
                      type="checkbox"
                      name="paymentMethod"
                      value="Zalo Pay"
                    />
                    Zalo Pay
                  </label>
                </div>
                {errors.paymentMethod && touched.paymentMethod ? (
                  <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                    {errors.paymentMethod}
                  </div>
                ) : null}
                <Button type="submit" block>
                  Continue
                </Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PaymentPage;
