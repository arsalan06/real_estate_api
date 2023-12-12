const { Inspection, ClientInspection,sequelize } = require("../models");
const appError = require("../utils/appError");
exports.makeInspection = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { inspectionDateTime, clientId, employeeId, propertyId } = req.body;
    const newInspection = await Inspection.create(
      {
        propertyId,
        employeeId,
        inspectionDateTime,
      },
      { transaction: t }
    );

    const inspectionId = newInspection.id;
    console.log(newInspection,"======");
    // const inspectionData = await ClientInspection.create(
    //   {
    //     inspectionId,
    //     clientId,
    //   },
    //   { transaction: t }
    // );
    // if (!inspectionData) {
    //   await t.rollback();
    //   return next(new appError("This inspection does not create", 401));
    // }
    res.status(201).json({
      status: "success",
      data: {
        message: "inspection created successfully",
        newInspection
      },
    });
    await t.commit();
  } catch (error) {
    await t.rollback();
    console.log(error);
    res.status(401).json({
      status: "Fail",
      message: error,
    });
  }
};
