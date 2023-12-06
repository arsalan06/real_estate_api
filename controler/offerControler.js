const { OfferStatus, Offer } = require("../models");
exports.addOfferStatus = async (req, res) => {
  try {
    const { title } = req.body;
    const newOfferStatus = await OfferStatus.create({ title });
    res.status(201).json({
      status: "success",
      data: {
        newOfferStatus,
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

exports.makeOffer = async (req, res) => {
  try {
    const { clientId, propertyId, offerStatusId, offerAmount } = req.body;
    const newOfferStatus = await Offer.create({
      clientId,
      propertyId,
      offerStatusId,
      offerAmount,
    });
    res.status(201).json({
      status: "success",
      data: {
        newOfferStatus,
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
