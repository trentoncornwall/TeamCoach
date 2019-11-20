const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/:user").post(userController.checkLogin);

module.exports = router;