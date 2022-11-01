const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.post("/adduser", UserController.addUser);
router.delete("/delete/:id", UserController.deleteUser);
router.get("/allusers", UserController.getAllUsers);
router.get("/getuser/:id", UserController.getUser);

module.exports = router;
