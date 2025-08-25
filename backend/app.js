const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const app = express();
const connectDB = require("./config/db")

connectDB()

app.get("/", (req, res)=>{
    res.send("Heelo")
})

module.exports = app