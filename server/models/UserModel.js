const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please Enter Firstname"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Please Enter Lastname"],
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
      maxlength: 16,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
