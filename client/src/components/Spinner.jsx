import React from "react";
import icon from "../assets/svg/spinner-1.svg";

const Spinner = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-gray-500/[0.4]">
      <img src={icon} className="h-20" />
    </div>
  );
};

export default Spinner;
