const { response } = require("express");
const Activity = require("../models/ActivityModel");

const allActivities = async (req, res) => {
  const _id = req.user._id.toString();
  try {
    const activities = await Activity.find({ userId: _id });
    res.status(200).json(activities);
  } catch (error) {
    console.log(error);
  }
};

const delActivity = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Activity.deleteOne({ _id: id });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};
const updateActivty = async (req, res) => {
  const { id } = req.params;
  const response = await Activity.findByIdAndUpdate(id, req.body);
  res.status(200).json(response);
};

const getActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.find({ _id: id });
  res.status(200).json(activity);
};

const addActivity = async (req, res) => {
  const { name, time } = req.body;
  const userId = req.user._id;
  const activity = new Activity({
    name,
    time,
    userId,
  });
  try {
    const newActivity = await activity.save();
    res.status(200).json(newActivity);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allActivities,
  addActivity,
  getActivity,
  delActivity,
  updateActivty,
};
