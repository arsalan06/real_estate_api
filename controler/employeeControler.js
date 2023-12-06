const { Employee, RoleType } = require("../models");
const appError = require("../utils/appError");

exports.addEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, startDate, jobTitle } = req.body;
    const newEmployee = await Employee.create({
      firstName,
      lastName,
      startDate,
      jobTitle,
    });
    res.status(201).json({
      status: "success",
      data: {
        newEmployee,
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

exports.addRoles = async (req, res, next) => {
  try {
    const { title } = req.body;
    const newEmployeeRole = await RoleType.create({
      title,
    });
    res.status(201).json({
      status: "success",
      data: {
        newEmployeeRole,
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
