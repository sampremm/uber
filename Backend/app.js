const dotenv=require('dotenv');
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./Db/Db");
const userRouter = require("./routes/user.routes");
const captainrouter = require("./routes/captain.routes");
const cookiesParser = require("cookie-parser");


connectDB();

app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(cookiesParser());
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use('/user', userRouter);
app.use('/captain', captainrouter);

module.exports = app;