const express = require("express");
const router = express.Router();

const schools = require("./schools");
const users = require("./users");

router.use("/schools", schools);
router.use("/users", users);

module.exports = router;
