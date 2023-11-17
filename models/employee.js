"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsToMany(models.RoleType, {
        through: "PropertyEmployee",
        foreignKey: "employeeId",
      });
      Employee.belongsToMany(models.Property, {
        through: "PropertyEmployee",
        foreignKey: "employeeId",
      });
      Employee.belongsToMany(models.Property, {
        through: "Inpection",
        foreignKey: "employeeId",
      });
      Employee.belongsToMany(models.Property, {
        through: "Contract",
        foreignKey: "employeeId",
      });
    }
  }
  Employee.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      startDate: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
