import React from "react";

const Activities = ({ data, id }) => {
  const deleteAct = (e) => {
    e.preventDefault();
    console.log("deletes");
  };
  return (
    <>
      <li className="flex justify-between">
        {`${id + 1}. ${data.name} - ${data.time} 
    `}{" "}
        <button
          className="bg-red-500 text-white text-sm py-1 px-2"
          onClick={deleteAct}
        >
          Delete
        </button>
      </li>
      <hr className="border-2 border-white-200" />
    </>
  );
};

export default Activities;
