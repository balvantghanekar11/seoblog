const express = require("express");
const router = express.Router();
const { time } = require("../controller/blog");

router.get("/", time);

module.exports = router;
