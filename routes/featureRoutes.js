const express = require("express");
const { addFeature } = require("../controler/FeatureControler");
const featureRouter = express.Router();
featureRouter.post("/addFeature",addFeature);
module.exports = featureRouter