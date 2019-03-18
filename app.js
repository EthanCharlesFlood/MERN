const express = require("express");
const mongoose = require('mongoose');

const app = express();
const db = require('./config/keys').mongoURI;

const users = require("./routes/api/users");
const events = require("./routes/api/events");

mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req,res) => res.send("HELLO WORLD"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));