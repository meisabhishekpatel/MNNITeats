const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('colors');

dotenv.config()
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.get("/", (req, res) => {
    res.send("<h1>Hello from node server via nodemon</h1>");
});
connectDB()
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server Running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white)
})
