const router = require("express").Router();
const userController = require("../../controller/userController");

router
  .route("/:id")
  .post(userController.createPlan)
  .get(userController.getPlan)
  .put(userController.updatePlan);

module.exports = router;
