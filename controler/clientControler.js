const { Client, ClientInterest } = require("../models");
const appError = require("../utils/appError");

exports.addClient = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const newClient = await Client.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    res.status(201).json({
      status: "success",
      data: {
        newClient,
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

exports.addClientInterest = async (req, res, next) => {
  try {
    const { clientId, propertyId } = req.body;
    const clientInterest = await ClientInterest.create({
      propertyId,
      clientId,
    });
    res.status(201).json({
      status: "success",
      data: {
        clientInterest,
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
