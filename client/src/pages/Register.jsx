import React from "react";
import Header from "../components/Header";

const Register = () => {
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
            />
            <input
              type="text"
              id="lastname"
              name="lastname"
              value=""
              placeholder="Lastname"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
            />
            <input
              type="text"
              id="email"
              name="email"
              value=""
              placeholder="Email"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
            />
            <input
              type="text"
              id="mobile"
              name="mobile"
              value=""
              placeholder="Mobile"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
            />
            <input
              type="password"
              id="password"
              name="password"
              value=""
              placeholder="Password"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
            />
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value=""
              placeholder="Re-enter Password"
              className="py-2 px-2 transition hover:shadow-md duration-2000 ease-in-out focus:outline focus:outline-1 focus:outline-red-300 shadow-sm focus:shadow:lg text-gray-500 text-lg"
            />
            <button className="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg rounded py-3 text-white text-xl">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
