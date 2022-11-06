const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//add user
const addUser = async (req, res) => {
  const { firstname, lastname, username, password, email, mobile } = req.body;

  try {
    const user = new UserModel(req.body);
    //check if user already exists
    const emailExists = await UserModel.exists({ email: email });
    const usernameExists = await UserModel.exists({ username: username });
    //return error if email exists
    if (emailExists)
      return res
        .status(301)
        .json({ message: "Email already exists. Try using different email" });

    //return error if username exists
    if (usernameExists)
      return res
        .status(301)
        .json({ message: "Username already exists.Try another" });

    //Bcrypt password encryption
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      user.password = hash;

      //If both conditions are false, save the new user.after creating hash
      const usersaved = await user.save();
      //return error if user save failed
      if (!usersaved) {
        return res
          .status(301)
          .json({ message: "Error occured. User not saved" });
      } else {
        delete usersaved._doc.password;

        return res.status(200).json({
          message: "User Saved Successfully",
          data: usersaved,
          token: tokenGenerator(usersaved._id),
        });
      }
    } catch (err) {
      console.log(err);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
//delete user
const deleteUser = (req, res) => {
  const _id = req.params.id;
  try {
    UserModel.deleteOne({ _id }).then((response) =>
      res
        .status(200)
        .json({ message: "User Deleted Succesfully", data: response })
    );
  } catch (error) {
    res
      .status(401)
      .json({ message: "Error. could not delete user (catch error)" });
  }
};
//update user
const updateUser = async (req, res) => {
  const { firstname, lastname, mobile, password } = req.body;
  const _id = req.params.id;
  try {
    await UserModel.findOneAndUpdate(
      { _id: _id },
      { firstname, lastname, mobile, password },
      { runValidators: true }
    ).then((user) =>
      res.status(200).json({ message: "User Updated", data: user })
    );
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
//fetch all users
const getAllUsers = (req, res) => {
  try {
    const users = UserModel.find({})
      .sort("username")
      .then((response) => {
        res.status(200).json({ message: "All users fetched", data: response });
      });
  } catch (error) {
    res.status(401).json({ message: "Error. Data could not be fetched" });
  }
};
//fetch single user
const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    //check if the user exists
    const userexists = await UserModel.exists({ _id: _id });
    if (userexists) {
      const user = await UserModel.findOne({ _id: _id });
      delete user._doc.password;
      res.status(200).json(user);
    } else {
      return res.status(201).json({ message: "Error. user does not exists" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error. could not fetch user" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  //check if the username exists in DB
  const userExists = await UserModel.exists({ username: username });
  if (userExists != null) {
    const user = await UserModel.findOne({ username: username });
    await bcrypt.compare(password, user.password).then((result) => {
      if (result) {
        const token = tokenGenerator(user._id);
        res.status(200).json({ message: "User Validated", token: token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    });
  } else {
    return res.status(401).json({ message: "Please enter valid credentials" });
  }
};

const tokenGenerator = (id) => {
  //Json token generator
  const secret_key = process.env.SECRET_KEY;
  return jwt.sign(
    {
      id: id,
    },
    secret_key,
    { expiresIn: "1d" }
  );
};

//Delete this after testing
const getMe = async (req, res) => {
  const { _id, email, username } = req.user;
  res.status(200).json({ email, username });
};

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUser,
  loginUser,
  getMe,
};
