const express = require("express");
const router = express.Router();
const authController = require("../Controller/authController.js")

router.post("/login", authController.login)
router.post("/createUser", authController.createUser)

module.exports = router;