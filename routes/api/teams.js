const router = require("express").Router();
const userController = require("../../controller/userController");

router
	.route("/")
	.get(userController.allTeams)
	

module.exports = router;