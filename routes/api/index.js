const router = require("express").Router();
const userRoute = require("./users");
const teamRoute = require("./teams");
const planRoute = require("./plans");

router.use("/users", userRoute);
router.use("/teams", teamRoute);
router.use("/plans", planRoute);

module.exports = router;
