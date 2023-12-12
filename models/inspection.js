"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Inspection.belongsToMany(models.Client, {
      //   through: "ClientInspection",
      //   foreignKey: "inspectionId",
      // });
    }
  }
  Inspection.init(
    {
      inspectionDateTime: DataTypes.DATE,
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER,
    // },
    },
    {
      sequelize,
      modelName: "Inspection",
    }
  );
  return Inspection;
};
