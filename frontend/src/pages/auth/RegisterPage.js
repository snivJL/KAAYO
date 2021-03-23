import React from "react";
import { Link } from "react-router-dom";
import SocialMediaPanel from "../../components/auth/SocialMediaPanel";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import userActions from "../../redux/actions/user.actions";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Name must contain at least 1 characters")
      .required("Required"),
    password: Yup.string()
      .min(2, "Password must contain at least 6 characters")
      .required("Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-green-600 to-green-200">
      <div className="bg-white w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <img
            className="w-40"
            src="https://res.cloudinary.com/dilv93gvb/image/upload/v1616463411/kaayo/130125615_100327665279102_3344081250135313817_n_z8msld.jpg"
            alt="logo"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
          <h3 className="mb-4 font-bold text-3xl flex items-center text-blue-500">
            REGISTER
          </h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirm: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              dispatch(userActions.register(values));
            }}
          >
            {({ errors, touched }) => (
              <Form
                action="#"
                className="px-3 flex flex-col justify-center items-center w-full gap-3"
              >
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
                  name="email"
                  type="email"
                  placeholder="email.."
                  className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                {errors.email && touched.email ? (
                  <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                    {errors.email}
                  </div>
                ) : null}
                <Field
                  name="password"
                  type="password"
                  placeholder="password.."
                  className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                {errors.password && touched.password ? (
                  <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                    {errors.password}
                  </div>
                ) : null}
                <Field
                  name="confirm"
                  type="password"
                  placeholder="confirm password.."
                  className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                />
                {errors.confirm && touched.confirm ? (
                  <div className="bg-red-200 rounded-lg py-1 px-2 text-sm">
                    {errors.confirm}
                  </div>
                ) : null}
                <button
                  type="submit"
                  className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1"
                >
                  <svg
                    className="w-5 h-5 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <p className="ml-1 text-lg">Register</p>
                </button>
              </Form>
            )}
          </Formik>
          <p className="my-2 text-green-500">Or</p>
          <SocialMediaPanel />
          <p className="text-gray-700 text-sm mt-4">
            Have an account?
            <Link
              to="/login"
              className="text-green-500 hover:text-green-600 mt-3 focus:outline-none font-bold underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
