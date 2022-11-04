const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserModel = require("../models/UserModel");
dotenv.config();

const tokenVerify = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header
      token = req.headers.authorization.split(" ")[1];

      console.log(token);
      //verify token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      //get user from the token
      req.user = await UserModel.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      return res.send("Invalid Token");
    }
  }

  if (!token) {
    res.status(401).send("No Token Available");
  }
};

module.exports = { tokenVerify };
