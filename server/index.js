// importing modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// creating the express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json()); // allows to pars json

// connecting to database
const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected to database");
});

const subjectsRouter = require("./routes/subjects");
const assignmentsRouter = require("./routes/assignments");

app.use("/subjects", subjectsRouter);
app.use("/assignments", assignmentsRouter);

// starting the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});