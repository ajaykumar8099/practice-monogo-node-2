const express = require("express");
const router = express.Router();
const { SignUp } = require("../controllers/user");

router.post("/signup", SignUp);

module.exports = router;
