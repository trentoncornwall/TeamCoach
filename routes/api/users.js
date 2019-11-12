const router = require("express").Router();
const userController = require("../../controller/userController");

router
	.route("/")
	.get(userController.findAll)
	.post(userController.createUser)
	.delete(userController.deleteUser);

module.exports = router;
