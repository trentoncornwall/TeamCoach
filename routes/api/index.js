const router = require("express").Router();
const userRoute = require("./users");

router.use("/users", userRoute);

module.exports = router;
