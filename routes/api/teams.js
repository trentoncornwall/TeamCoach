const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/:id").post(userController.CreateUser);

router
  .route("/")
  .get(userController.allTeams)
  .post(userController.createTeam);

module.exports = router;
