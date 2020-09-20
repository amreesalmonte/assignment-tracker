// importing modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// creating the express server
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json()); // allows to pars json

// connecting to database
const uri = "mongodb+srv://amrees:amrees@cluster0.unpuh.gcp.mongodb.net/ATdb?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to database");
});

// starting the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});