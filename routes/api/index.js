const router = require("express").Router();
const userRoute = require("./users");
const teamRoute = require("./teams")

router.use("/users", userRoute);
router.use("/teams", teamRoute)

module.exports = router;
