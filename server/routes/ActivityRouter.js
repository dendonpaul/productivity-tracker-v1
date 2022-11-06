const express = require("express");
const router = express.Router();
const ActivityController = require("../controllers/ActivityController");
const AuthController = require("../controllers/AuthController");

router.get(
  "/activity/allactivities",
  AuthController.tokenVerify,
  ActivityController.allActivities
);
router.get("/activity/:id", ActivityController.getActivity);
router.post(
  "/activity/add",
  AuthController.tokenVerify,
  ActivityController.addActivity
);
router.delete("/activity/:id", ActivityController.delActivity);
router.put("/activity/:id", ActivityController.updateActivty);

module.exports = router;
