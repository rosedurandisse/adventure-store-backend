// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const adventuresController = require("./Controllers/AdventureController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/adventures", adventuresController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, this is the activity app");
});

// EXPORT
module.exports = app;
