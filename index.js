const express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'uploads')))
const featureRouter = require("./routes/featureRoutes");
app.use("/api/v1", featureRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
