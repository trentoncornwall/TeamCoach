const router = require("express").Router();
const userController = require("../../controller/userController");
const passport = require('passport');

router.route("/").post(passport.authenticate('local'), userController.checkLogin);
router.route("/current").get(userController.checkUser);
router.route("/logout").get(userController.logOut);

module.exports = router;