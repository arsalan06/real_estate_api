"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OfferStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OfferStatus.hasMany(models.Offer, { foreignKey: "offerStatusId" });
    }
  }
  OfferStatus.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OfferStatus",
    }
  );
  return OfferStatus;
};
