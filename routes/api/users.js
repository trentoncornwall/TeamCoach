const router = require("express").Router();
const userController = require("../../controller/userController");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.CreateUser)
  .delete(userController.deleteUser);

module.exports = router;
