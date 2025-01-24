const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")

const app = express();

const authRoutes = require("./routes/authRoutes.js")
const gameRoutes = require("./routes/gameRoutes.js")
const tagRoutes = require("./routes/tagRoutes.js")
mongoose.connect(process.env.DB_URL)
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/tags", tagRoutes);


app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(process.env.PORT);