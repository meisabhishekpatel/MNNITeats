const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('colors');
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys


dotenv.config()
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route

app.use('/api/pizzas', require("./routes/pizzaRoute"));
app.use('/api/users', require("./routes/userRoute"));
app.use('/api/orders', require("./routes/orderRoute"));
app.get("/", (req, res) => {
    res.send("<h1>Hello from node server via nodemon</h1>");
});
connectDB()
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server Running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white)
})
