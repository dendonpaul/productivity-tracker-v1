const express = require("express");
const router = express.Router();
const ActivityController = require("../controllers/ActivityController");

router.get("/activity/allactivities", ActivityController.allActivities);
router.get("/activity/:id", ActivityController.getActivity);
router.post("/activity/add", ActivityController.addActivity);
router.delete("/activity/:id", ActivityController.delActivity);
router.put("/activity/:id", ActivityController.updateActivty);

module.exports = router;
