import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
    username: "",
  });
  const validationErrors = [];
  const userAPIUrl = process.env.REACT_APP_BACKEND_USER_URL;

  const [disabled, setDisabled] = useState(false);

  //onChange function to update the values state.
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //Submit handler
  const onSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    //validate fields
    if (values.firstname === "") validationErrors.push("Firstname Required");
    if (values.lastname === "") validationErrors.push("Lastname Required");
    if (values.mobile === "") validationErrors.push("Mobile Required");
    if (values.email === "") {
      validationErrors.push("Email Required");
    } else {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
      if (!values.email.match(emailRegex)) {
        validationErrors.push("Invalid Email.");
      }
    }
    if (values.password === "") validationErrors.push("Password Required");
    if (values.cpassword === "")
      validationErrors.push("Confirm Password Required");
    if (values.cpassword !== values.password)
      validationErrors.push("Passwords do not match");

    //Check if validation error are available. sent toast if true
    validationErrors.length > 0 &&
      validationErrors.map((error) => {
        setDisabled(false);
        return toast.error(error);
      });

    //submit form if validations are corrects
    if (validationErrors.length <= 0) {
      try {
        await axios.post(`${userAPIUrl}/adduser`, values).then((response) => {
          toast.success(response.data.message);
          setDisabled(false);
        });
      } catch (error) {
        toast.error(error.response.data.message);
        setDisabled(false);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="max-w-3xl mx-auto flex-col items-center space-y-10">
        <div className="mt-10">
          <h1 className="mt-20 mb-16 text-bold text-white text-[30px]">
            Register
          </h1>
          <form className="flex flex-col space-y-3 max-w-xl mx-auto">
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              placeholder="Firstname"
              onChange={onChange}
              value={values.firstname}
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Lastname"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              onChange={onChange}
              value={values.lastname}
            />
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              placeholder="Email"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              onChange={onChange}
            />

            <input
              type="text"
              placeholder="Username"
              value={values.username}
              name="username"
              id="username"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              onChange={onChange}
            />
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={values.mobile}
              placeholder="Mobile"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              onChange={onChange}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              placeholder="Password"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              onChange={onChange}
            />
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={values.cpassword}
              placeholder="Re-enter Password"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              onChange={onChange}
            />
            <button
              disabled={disabled}
              type="button"
              onClick={onSubmit}
              className="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg rounded py-3 text-white text-xl"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
