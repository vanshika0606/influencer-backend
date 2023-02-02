const express = require('express');

const app= express();


app.use(express.json());

const user = require("./routes/InfluencerRoute")
app.use("/",user);


module.exports = app;