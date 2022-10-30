import React from "react";
import { useState } from "react";
import Activities from "./Activities";
import axios from "axios";
import { useEffect } from "react";

const MainComp = () => {
  //get api url from the env file
  const apiURL = process.env.REACT_APP_BACKEND_URL;

  const [values, setValues] = useState({
    activity: "",
    time: "",
  });
  const [activities, setActivities] = useState([]);
  const [updated, setUpdated] = useState(false);
  //useEffect to fetch all the activities with a dependency on the [values]
  useEffect(() => {
    axios
      .get(`${apiURL}/activity/allactivities`)
      .then((response) => setActivities(response.data));
  }, [updated]);

  //form on change function
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //function to trigger on save button click
  const onSave = async (e) => {
    e.preventDefault();
    setUpdated(false);
    axios
      .post(`${apiURL}/activity/add`, {
        name: values.activity,
        time: values.time,
      })
      .then((response) => setUpdated(true));
  };
  return (
    <div className="App">
      <div className="max-w-3xl mx-auto flex-col items-center space-y-10">
        <div className="w-full mt-10 font-bold text-5xl text-white">
          Productivity Tracker
        </div>
        <div className="w-full form flex space-x-3 justify-center">
          <input
            type="text"
            name="activity"
            id="activity"
            value={values.activity}
            placeholder="Activity Name"
            className="w-full text-xl px-2 py-4 focus:outline focus:outline-1 focus:outline-red-400 "
            onChange={onChange}
          />
          <input
            type="number"
            name="time"
            id="time"
            value={values.time}
            placeholder="Time Taken (hrs)"
            className="w-full text-xl px-2 py-4 focus:outline focus:outline-1 focus:outline-red-400"
            onChange={onChange}
          />
        </div>
        <button
          onClick={onSave}
          className="bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg px-5 py-4 w-full text-white font-bold text-lg focus:outline-0 transition duration-200 ease-in-out"
        >
          Save
        </button>
        <div className="">
          <h2 className="text-2xl text-left text-white font-bold mb-3">
            All Activities
          </h2>
          <ul className="flex flex-col space-y-2 text-left text-lg font-semibold">
            {activities &&
              activities.map((element, index) => (
                <Activities data={element} key={index} id={index} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
