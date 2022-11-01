const UserModel = require("../models/UserModel");

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

    //If both conditions are false, save the new user
    const usersaved = await user.save();
    //return error if user save failed
    if (!usersaved) {
      return res.status(301).json({ message: "Error occured. User not saved" });
    } else {
      delete usersaved._doc.password;
      return res.status(200).json(usersaved);
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
const updateUser = () => {};

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
const getUser = () => {};

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUser,
};
