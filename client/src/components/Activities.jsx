import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Activities = ({ data, id, deleteAct }) => {
  //state to add dep for useEffect
  const [update, setUpdated] = useState(false);
  return (
    <>
      <li className="flex justify-between">
        {`${id + 1}. ${data.name} - ${data.time} 
    `}{" "}
        <button
          className="bg-red-500 text-white text-sm py-1 px-2"
          onClick={() => deleteAct(data)}
        >
          Delete
        </button>
      </li>
      <hr className="border-2 border-white-200" />
    </>
  );
};

export default Activities;
