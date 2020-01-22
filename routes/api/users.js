const router = require("express").Router();
const userController = require("../../controller/userController");

router
  .route("/:user")
  .get(userController.findOne)
  .put(userController.updateUser);

router
  .route("/")
  .get(userController.findAll)
  .post(userController.CreateUser)
  .delete(userController.deleteUser);

module.exports = router;
