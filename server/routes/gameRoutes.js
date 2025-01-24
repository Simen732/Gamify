const express = require("express");
const router = express.Router();

const gameController = require("../Controller/gameController.js")

router.get("/", gameController.getAllGames);
router.get("/:id", gameController.getGame);


router.post("/", gameController.createGame);


router.put("/:id", gameController.editGame);


router.delete("/:id", gameController.deleteGame);

module.exports = router