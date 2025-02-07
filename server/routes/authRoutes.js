const express = require("express");
const router = express.Router();
const authController = require("../Controller/authController.js")
const jwt = require("jsonwebtoken")
const verifyJwt = require("../middleware/verifyToken.js")

router.post("/login", authController.login)
router.post("/createUser", authController.createUser)
router.get("/user", verifyJwt, authController.user)
console.log("Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")

module.exports = router;