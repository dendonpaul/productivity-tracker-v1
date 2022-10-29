import React from "react";

const Activities = ({ data, id }) => {
  return <li>{`${id + 1}. ${data.name} - ${data.time}`}</li>;
};

export default Activities;
