"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Listing.belongsTo(models.Property, { foreignKey: "propertyId" });
      Listing.belongsTo(models.ListingStatus, {
        foreignKey: "listingStatusId",
      });
      Listing.belongsTo(models.ListingType, { foreignKey: "listingTypeId" });
    }
  }
  Listing.init(
    {
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Listing",
    }
  );
  return Listing;
};
