const router = require("express").Router();
const userRoute = require("./users");
const teamRoute = require("./teams");
const planRoute = require("./plans");
const loginRoute = require("./login");

router.use("/users", userRoute);
router.use("/teams", teamRoute);
router.use("/plans", planRoute);
router.use("/login", loginRoute);

module.exports = router;
