const express = require("express");
const router = express.Router();

const tagController = require("../Controller/tagController.js")

router.get("/", tagController.getAllTags)
router.post("/", tagController.createTag)

router.get("/:id", tagController.getTag)
router.get("/:id", tagController.updateTag)
router.get("/:id", tagController.deletTag)