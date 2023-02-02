const express = require('express');

const cors = require('cors')
const app= express();


app.use(cors());

app.use(express.json());

const user = require("./routes/InfluencerRoute")
app.use("/",user);


module.exports = app;