const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/:id").post(userController.CreateUser);
router.route("/users").get(userController.getTeamUsers);

router
  .route("/find/:id")
  .get(userController.getOneTeam)
  .put(userController.updateTeam);
router
  .route("/")
  .get(userController.allTeams)
  .post(userController.createTeam);

module.exports = router;
