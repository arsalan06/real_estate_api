const express = require("express");
const { addOfferStatus, makeOffer } = require("../controler/offerControler");
const offerRouter = express.Router();
offerRouter.post("/addOfferStatus",addOfferStatus);
offerRouter.post("/makeOffer",makeOffer);
module.exports = offerRouter