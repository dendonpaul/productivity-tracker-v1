const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.post("/adduser", UserController.addUser);

module.exports = router;
