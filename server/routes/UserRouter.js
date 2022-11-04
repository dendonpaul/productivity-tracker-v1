const router = require("express").Router();
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");

router.post("/adduser", UserController.addUser);
router.delete(
  "/delete/:id",
  AuthController.tokenVerify,
  UserController.deleteUser
);
router.get("/allusers", UserController.getAllUsers);
router.get("/getuser/:id", AuthController.tokenVerify, UserController.getUser);
router.put(
  "/update/:id",
  AuthController.tokenVerify,
  UserController.updateUser
);
router.post("/login", UserController.loginUser);
router.get("/testjwt", AuthController.tokenVerify, UserController.getMe);
module.exports = router;
