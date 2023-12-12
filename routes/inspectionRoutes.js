const express = require("express");
const { makeInspection } = require("../controler/inspectionControler");
const inspectionRouter = express.Router();
inspectionRouter.post("/makeInspection", makeInspection);
module.exports = inspectionRouter;
