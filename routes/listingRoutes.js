const express = require("express");
const { addListingType, addListingStatus, addPropertyListing } = require("../controler/listingControler");
const listingRouter = express.Router();
listingRouter.post("/addListingType",addListingType);
listingRouter.post("/addListingStatus",addListingStatus);
listingRouter.post("/addPropertyListing",addPropertyListing);
module.exports = listingRouter