"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListingType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListingType.hasMany(models.Listing, {
        foreignKey: "listingTypeId",
        as: "Listing",
      });
      ListingType.hasMany(models.Contract, {
        foreignKey: "listingTypeId",
        as: "Listingtype",
      });
    }
  }
  ListingType.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "This title aready exist",
        },
      },
    },
    {
      sequelize,
      modelName: "ListingType",
    }
  );
  return ListingType;
};
