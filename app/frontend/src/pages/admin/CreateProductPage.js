import React, { useState } from "react";
import { Image, Breadcrumb } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { LinkContainer } from "react-router-bootstrap";
import productActions from "../../redux/actions/product.actions";

const CreateProductPage = () => {
  const [images, setImages] = useState([{}]);
  const dispatch = useDispatch();

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    shortDesc: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    ingredients: Yup.string().required("Required"),
    category: Yup.array().required("Required"),
    images: Yup.array().required("Required"),
    target: Yup.string().required("Required"),
  });

  const widget = window.cloudinary.createUploadWidget(
    { cloudName: "dilv93gvb", uploadPreset: "kaayo1" },
    (error, result) => {
      if (result.event && result.event === "success")
        setImages((images) => [
          ...images,
          { imageUrl: result.info.secure_url },
        ]);
    }
  );

  return (
    <div className="min-w-screen w-full lg:w-5/6 mt-24 px-16 mx-auto bg-white">
      <Formik
        initialValues={{
          name: "",
          shortDesc: "",
          description: "",
          price: "",
          ingredients: "",
          category: [],
          stock: "",
          images: [],
          target: "",
          productCollection: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={async (values) => {
          images[0] === "" ? images.shift() : console.log("");

          values.images = images;
          dispatch(productActions.createProduct(values));
        }}
      >
        {({ touched, errors }) => (
          <div className="container mx-auto">
            <Breadcrumb
              className="mr-auto max-w-max bg-transparent py-2"
              bsPrefix="breadcrumb-item"
            >
              <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
              </LinkContainer>
              <Breadcrumb.Item active>Create Product</Breadcrumb.Item>
            </Breadcrumb>
            <div className="max-w-xl mx-auto bg-white pb-6 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                  Create Product
                </h1>
              </div>
              <div className="m-7">
                <Form>
                  <label className="block mb-2 text-lg text-sm text-gray-600">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="name.."
                    className="w-full px-3 py-2 mb-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {errors.name && touched.name ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.name}
                    </div>
                  ) : null}
                  <label className="block mb-2  text-lg text-gray-600">
                    Short Description
                  </label>
                  <Field
                    name="shortDesc"
                    type="text"
                    placeholder="The fierce..."
                    className="px-4 py-2 mb-3 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.shortDesc && touched.shortDesc ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.shortDesc}
                    </div>
                  ) : null}
                  <label className="block mb-2  text-lg text-gray-600">
                    Description
                  </label>
                  <Field
                    name="description"
                    type="text"
                    placeholder="description.."
                    className="px-4 py-2 mb-3 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.description && touched.description ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.description}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Price
                  </label>
                  <Field
                    name="price"
                    type="text"
                    placeholder="120000"
                    className=" px-4 py-2 w-full mb-3 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.price && touched.price ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.price}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Ingredients
                  </label>
                  <Field
                    name="ingredients"
                    type="text"
                    placeholder="Cinnamon,ginger,coconut oil,..."
                    className="px-4 py-2 w-full mb-3 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.ingredients && touched.ingredients ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.ingredients}
                    </div>
                  ) : null}

                  <div
                    className="block mb-2 text-lg text-gray-600"
                    id="checkbox-group"
                  >
                    Categories
                  </div>
                  <div
                    className="category-label mb-3 flex flex-wrap items-center"
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
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
                  <label className="block mb-2 text-lg text-gray-600">
                    Stock
                  </label>
                  <Field
                    name="stock"
                    type="text"
                    placeholder="10"
                    className=" px-4 py-2 w-full mb-3 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.stock && touched.stock ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.stock}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Target
                  </label>
                  <Field as="select" name="target" className="mb-3">
                    <option value="Oily Skin">Oily Skin</option>
                    <option value="Dry Skin">Dry Skin</option>
                    <option value="Sensitive Skin">Sensitive Skin</option>
                  </Field>
                  {errors.target && touched.target ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.target}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Collection (optional)
                  </label>
                  <Field
                    name="productCollection"
                    type="text"
                    placeholder="Tet Collection"
                    className="px-4 py-2 w-full mb-3 rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                  />
                  {errors.productCollection && touched.productCollection ? (
                    <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                      {errors.productCollection}
                    </div>
                  ) : null}
                  <label className="block mb-2 text-lg text-gray-600">
                    Preview (
                    {`${images.length - 1} image${
                      images.length - 1 > 1 ? "s" : ""
                    }`}
                    )
                  </label>
                  <div className="mb-3 flex space-x-2">
                    {images.length > 0 &&
                      images.map(
                        (i, index) =>
                          i.imageUrl && (
                            <Image
                              style={{ width: "120px", height: "auto" }}
                              className=""
                              key={index}
                              src={i.imageUrl}
                            ></Image>
                          )
                      )}
                  </div>

                  <button
                    type="button"
                    className="btn btn-block bg-green-300"
                    onClick={() => widget.open()}
                  >
                    Upload images
                  </button>
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
