import React from "react";
import { Formik, Field, Form } from "formik";

const Checkboxes = () => (
  <div>
    <h1>Create Product</h1>
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: null,
        ingredients: "",
        categories: [],
        images: [],
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <Field
            name="name"
            type="text"
            placeholder="name.."
            className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
          />
          {errors.name && touched.name ? (
            <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
              {errors.name}
            </div>
          ) : null}
          <Field
            name="description"
            type="text"
            placeholder="description.."
            className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
          />
          {errors.description && touched.description ? (
            <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
              {errors.description}
            </div>
          ) : null}
          <Field
            name="price"
            type="text"
            placeholder="price.."
            className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
          />
          {errors.price && touched.price ? (
            <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
              {errors.price}
            </div>
          ) : null}
          <Field
            name="ingredients"
            type="text"
            placeholder="Cinnamon,ginger,coconut oil,..."
            className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
          />
          {errors.ingredients && touched.ingredients ? (
            <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
              {errors.ingredients}
            </div>
          ) : null}
          <div id="checkbox-group">Categories</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="categories" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="categories" value="Two" />
              Two
            </label>

            <label>
              <Field type="checkbox" name="categories" value="Three" />
              Three
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Checkboxes;
