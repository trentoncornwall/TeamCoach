const router = require("express").Router();
const userController = require("../../controller/userController");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.CreateUser);

module.exports = router;
