"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsTo(models.PropertyType, { foreignKey: "propertyTypeId", as:"propertystatus" });
      Property.belongsToMany(models.Feature, {
        through: "PropertyFeature",
        as:"propertyfeature",
        foreignKey: "propertyId",
      });
      Property.belongsToMany(models.Employee, {
        through: "PropertyEmployee",
        as:"propertyemployee",
        foreignKey: "propertyId",
      });
      Property.hasOne(models.Listing, { foreignKey: "propertyId", as:"listing" });
      Property.belongsToMany(models.Employee, {
        through: "Inspection",
        as:"inspection",
        foreignKey: "propertyId",
      });
      Property.belongsToMany(models.Client, {
        through: "ClientInterest",
        as: "clients",
        foreignKey: "propertyId",
      }) 
      Property.belongsToMany(models.Client, {
        through: "Offer",
        as: "offers",
        foreignKey: "propertyId"
      })
      Property.belongsToMany(models.Client, {
        through: "Contract",
        as: "contract",
        foreignKey: "propertyId",
      });
    }
  }
  Property.init(
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      region: DataTypes.STRING,
      propertySize: DataTypes.STRING,
      blockSize: DataTypes.STRING,
      badRooms: DataTypes.INTEGER,
      bathRooms: DataTypes.INTEGER,
      carSpace: DataTypes.INTEGER,
      description: DataTypes.STRING,
      propertyImages: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
