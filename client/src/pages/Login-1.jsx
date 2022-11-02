import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const apiURL = process.env.REACT_APP_BACKEND_USER_URL;
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiURL}/login`, values).then((result) => {
        setLoading(true);
        toast.success(result.data.message);
        localStorage.setItem("token", result.data.token);
      });
    } catch (error) {
      toast.error(error);
    }
  };
  if (loading) return <Spinner />;
  return (
    <div className="App">
      <Header />
      <div className="max-w-3xl mx-auto flex-col items-center space-y-10">
        <div className="mt-10">
          <h1 className="mt-20 mb-16 text-bold text-white text-[30px]">
            Login
          </h1>
          <form className="flex flex-col space-y-3 max-w-xl mx-auto">
            <input
              type="text"
              id="username"
              name="username"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              placeholder="Username"
              onChange={onChange}
              value={values.username}
            />
            <input
              type="password"
              id="password"
              name="password"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
              placeholder="Password"
              onChange={onChange}
              value={values.password}
            />
            <button
              disabled={disabled}
              type="button"
              onClick={onSubmit}
              className="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg rounded py-3 text-white text-xl"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
