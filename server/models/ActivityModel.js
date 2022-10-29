const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const ActivityModel = mongoose.model("activity", ActivitySchema);

module.exports = ActivityModel;
