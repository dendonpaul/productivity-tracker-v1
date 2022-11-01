import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathMatch = (path) => {
    if (path === location.pathname) {
      console.log(location.pathname);
      return true;
    }
  };
  return (
    <div className="max-w-3xl mx-auto flex-col items-center space-y-10">
      <div className="flex justify-between items-center mt-3">
        <div className="text-[30px] font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-fill-transparent ">
          ProTracker
        </div>
        <div className="">
          <ul className="flex space-x-3">
            <Link to="/">
              <li
                className={`cursor-pointer ${
                  pathMatch("/") &&
                  "text-black bg-white border-b-red-500 rounded px-2"
                }`}
              >
                Home
              </li>
            </Link>
            <li>Login</li>
            <Link to="/register">
              <li
                className={`cursor-pointer ${
                  pathMatch("/register") &&
                  "text-black bg-white border-b-red-500 rounded px-2"
                }`}
              >
                Register
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
