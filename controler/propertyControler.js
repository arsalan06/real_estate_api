const { PropertyType, sequelize, Property } = require("../models");
const appError = require("../utils/appError");
const t = await sequelize.transaction();
exports.addPropertyType = async (req, res) => {
  try {
    const { title } = req.body;
    const propertyType = await PropertyType.create({ title });
    res.status(201).json({
      status: "success",
      data: {
        propertyType,
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

exports.addProperty = async (req, res, next) => {
  try {
    const {
      propertyTypeId,
      address,
      city,
      region,
      propertySize,
      blockSize,
      badRooms,
      bathRooms,
      carSpace,
      description,
    } = req.body;
    const propertyTypeExist = await PropertyType.find({
      where: { id: propertyTypeId },
    });
    if (!propertyTypeExist) {
      await t.rollback();
      next(new appError("This propert type does not exist", 401));
    }
    const newProperty = Property.create(
      {
        propertyTypeId,
        address,
        city,
        region,
        propertySize,
        blockSize,
        badRooms,
        bathRooms,
        carSpace,
        description,
      },
      { transaction: t }
    );
    await t.commit();
    res.status(201).json({
      status: "success",
      data: {
        property: newProperty,
      },
    });
  } catch (error) {
    await t.rollback();
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};
