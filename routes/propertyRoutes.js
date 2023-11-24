const express = require("express");
const { addPropertyType } = require("../controler/propertyControler");
const propertyRouter = express.Router();
propertyRouter.post("/addPropertyType", addPropertyType);
module.exports = propertyRouter;
