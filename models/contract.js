"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contract.belongsTo(models.ContractStatus, {
        foreignKey: "contractStatusId",
        as: "contractstatus",
      });
      Contract.belongsTo(models.ListingType, {
        foreignKey: "listingTypeId",
        as: "Listingtype",
      });
    }
  }
  Contract.init(
    {
      contractDocument: DataTypes.STRING,
      signedDate: DataTypes.DATE,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
    },
    {
      sequelize,
      modelName: "Contract",
    }
  );
  return Contract;
};
