const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/:id").post(userController.createPlan);

module.exports = router;