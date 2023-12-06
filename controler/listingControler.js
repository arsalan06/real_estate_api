const { ListingType, ListingStatus, Listing,Property } = require("../models");
const appError = require("../utils/appError");
exports.addListingType = async (req, res) => {
  try {
    const { title } = req.body;
    const newListingType = await ListingType.create({ title });
    res.status(201).json({
      status: "success",
      data: {
        newListingType,
      },
    });
  } catch (error) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.addListingStatus = async (req, res) => {
  try {
    const { title } = req.body;
    const newListingStatus = await ListingStatus.create({ title });
    res.status(201).json({
      status: "success",
      data: {
        newListingStatus,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.addPropertyListing = async (req, res, next) => {
  try {
    const { propertyId, listingStatusId, listingTypeId, price } = req.body;
    const propertyExist = await Property.findOne({
      where: { id: propertyId },
    });
    if (!propertyExist) {
      return next(new appError("This property type does not exist", 401));
    }
    const newListing = await Listing.create({
      propertyId,
      listingStatusId,
      listingTypeId,
      price,
    });
    res.status(201).json({
      status: "success",
      data: {
        newListing,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};
