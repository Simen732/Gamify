const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const app = express();

const authRoutes = require("./routes/authRoutes.js")
const gameRoutes = require("./routes/gameRoutes.js")
const tagRoutes = require("./routes/tagRoutes.js")
const reviewRoutes = require("./routes/reviewRoutes.js")

mongoose.connect(process.env.DB_URL)
app.use(express.urlencoded({extended: true}));

app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/review", reviewRoutes)


app.get("/", (req, res) => {
    res.send("Dette er simen sin kode")
})

app.listen(process.env.PORT);