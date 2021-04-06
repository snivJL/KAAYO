import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import couponActions from "../../redux/actions/coupon.actions";

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const yesterday = new Date(Date.now() - 86400000);

  const CouponSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    discount: Yup.string().required("Required"),
    validFrom: Yup.date()
      .required("Required")
      .min(yesterday, "Date cannot be in the past"),
    validUntil: Yup.date()
      .required("Required")
      .min(Yup.ref("validFrom"), "end date can't be before start date"),
    category: Yup.array(),
  });

  return (
    <div className="min-w-screen w-full lg:w-5/6 mt-24 px-16 mx-auto bg-white">
      <Formik
        initialValues={{
          name: "",
          description: "",
          discount: "",
          validFrom: "",
          validUntil: "",
          category: [],
        }}
        validationSchema={CouponSchema}
        onSubmit={async (values) => {
          dispatch(couponActions.createCoupon(values));
        }}
      >
        {({ touched, errors }) => (
          <div className="w-full mx-auto">
            <div className="max-w-xl mx-auto bg-white rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                  Create Coupon
                </h1>
              </div>
              <div className="m-5">
                <Form>
                  <label className="block mb-2 text-lg text-sm text-gray-600">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="DEMODAY10"
                    className="w-full px-3 py-2 mb-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {errors.name && touched.name ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.name}
                    </div>
                  ) : null}
                  <label className="block mb-2  text-lg text-gray-600">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    type="text"
                    placeholder="10% off for all categories..."
                    className="px-4 py-2 mb-3 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.description && touched.description ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.description}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Discount (percentage)
                  </label>
                  <Field
                    name="discount"
                    type="text"
                    placeholder="10"
                    className="px-4 py-2 mb-3 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />

                  {errors.discount && touched.discount ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.discount}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Valid From
                  </label>
                  <Field
                    name="validFrom"
                    type="date"
                    className="px-4 py-2 w-full mb-3 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.validFrom && touched.validFrom ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.validFrom}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Valid Until
                  </label>
                  <Field
                    name="validUntil"
                    type="date"
                    className="px-4 py-2 w-full mb-3 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.validUntil && touched.validUntil ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.validUntil}
                    </div>
                  ) : null}
                  <div
                    className="block mb-2 text-lg text-gray-600"
                    id="checkbox-group"
                  >
                    Valid For:
                  </div>
                  <div
                    className="category-label mb-3 flex flex-wrap items-center"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    <label>
                      <Field type="checkbox" name="category" value="all" />
                      All
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Body Butter"
                      />
                      Body Butter
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Charcoal Soap"
                      />
                      Charcoal Soap
                    </label>

                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Spice Soap"
                      />
                      Spice Soap
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Butter Soap"
                      />
                      Butter Soap
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Clay Soap"
                      />
                      Clay Soap
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Milk Soap"
                      />
                      Milk Soap
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Baby Soap"
                      />
                      Baby Soap
                    </label>
                    <label>
                      <Field type="checkbox" name="category" value="Lip Balm" />
                      Lip Balm
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="category"
                        value="Shampoo Bar"
                      />
                      Shampoo Bar
                    </label>
                  </div>
                  {errors.category && touched.category ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.category}
                    </div>
                  ) : null}
                  <button
                    className="btn btn-block bg-green-700 text-white"
                    type="submit"
                  >
                    Create
                  </button>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateProductPage;
