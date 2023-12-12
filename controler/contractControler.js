const { ContractStatus, Contract } = require("../models");

exports.addContractStatus = async (req, res) => {
  try {
    const { title } = req.body;
    const newContractStatus = await ContractStatus.create({ title });
    res.status(201).json({
      status: "success",
      data: {
        newContractStatus,
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

exports.makeContract = async (req, res) => {
  try {
    const {
      listingTypeId,
      contractStatusId,
      clientId,
      employeeId,
    } = req.body;
    const { propertyId } = req.query;
    const filePath = req?.files?.path;
    const newContractStatus = await Contract.create({
      listingTypeId,
      contractStatusId,
      propertyId,
      clientId,
      employeeId,
      contractDocument: filePath,
    });
    res.status(201).json({
      status: "success",
      data: {
        newContractStatus,
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
