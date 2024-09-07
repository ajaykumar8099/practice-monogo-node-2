const express = require("express");
const router = express.Router();
const { SignUp,SignIn } = require("../controllers/user");

router.post("/signup", SignUp);
router.post("/signin",SignIn)

module.exports = router;
