"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PropertyType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyType.hasMany(models.Property, { foreignKey: "propertyTypeId", as:"Property" });
    }
  }
  PropertyType.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PropertyType",
    }
  );
  return PropertyType;
};
