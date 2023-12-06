const {
  PropertyType,
  sequelize,
  Property,
  PropertyFeature,
  PropertyEmployee,
} = require("../models");
const appError = require("../utils/appError");
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
    console.log(error);
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.addProperty = async (req, res, next) => {
  const t = await sequelize.transaction();
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
      propertyFeatures,
    } = req.body;
    const propertyTypeExist = await PropertyType.findOne({
      where: { id: propertyTypeId },
    });
    if (!propertyTypeExist) {
      return next(new appError("This property type does not exist", 401));
    }
    const newProperty = await Property.create(
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
    if (!newProperty) {
      await t.rollback();
      next(new appError("This property does not upload", 401));
    }
    const propertyId = newProperty.id;
    const featureArray = propertyFeatures.map((featureId) => {
      return {
        propertyId,
        featureId,
      };
    });
    const features = await PropertyFeature.bulkCreate(featureArray, {
      transaction: t,
    });
    if (!features) {
      await t.rollback();
    }
    res.status(201).json({
      status: "success",
      data: {
        message: "property create successfully",
      },
    });
    await t.commit();
  } catch (error) {
    await t.rollback();
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.addPropertyImages = async (req, res, next) => {
  try {
    const { id } = req.params;
    const propertyExist = await Property.findOne({
      where: { id: id },
    });
    if (!propertyExist) {
      console.log("in error class");
      return next(new appError("This property does not Exist", 401));
    }
    let projectImages = req.files.map((file) => file.path);
    propertyExist.propertyImages = projectImages;
    await propertyExist.save();
    res.status(200).json({
      status: "success",
      data: {
        message: "images uploads successfully",
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.getAllProperty = async (req, res, next) => {
  try {
    const allProperties = await Property.findAll();
    res.status(200).json({
      status: "success",
      data: {
        data: allProperties,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.addPropertyEmployee = async (req, res, next) => {
  try {
    const { propertyId, employeeId, roleId, startDate, endDate } = req.body;
    const propertyEmployee = await PropertyEmployee.create({
      propertyId,
      employeeId,
      roleId,
      startDate,
      endDate,
    });
    res.status(200).json({
      status: "success",
      data: {
        data: propertyEmployee,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};
