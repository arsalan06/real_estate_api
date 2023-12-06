const express = require("express");
require("dotenv").config();
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'propertyImages')))
const featureRouter = require("./routes/featureRoutes");
const propertyRouter = require("./routes/propertyRoutes");
const listingRouter = require("./routes/listingRoutes");
const employeeRouter = require("./routes/employeeRoutes");
const clientRouter = require("./routes/clientRoutes");
const offerRouter = require("./routes/offerRoutes");
app.use("/api/v1", featureRouter);
app.use("/api/v1", propertyRouter);
app.use("/api/v1", listingRouter);
app.use("/api/v1", employeeRouter);
app.use("/api/v1", clientRouter);
app.use("/api/v1", offerRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
