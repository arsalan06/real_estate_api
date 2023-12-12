"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Client.belongsToMany(models.Property, {
      //   through: "ClientInterest",
      //   foreignKey: "clientId",
      // });

      Client.belongsToMany(models.Property, {
        through: "ClientInterest",
        as: "interests",
        foreignKey: "clientId"
      }) 
      // Client.belongsToMany(models.Inspection, {
      //   through: "ClientInspection",
      //   as: "inspections",
      //   foreignKey: "clientId",
      // });
      Client.belongsToMany(models.Property, {
        through: "Offer",
        as: "offers",
        foreignKey: "clientId",
      });
      Client.belongsToMany(models.Property, {
        through: "Contract",
        as: "contractse",
        foreignKey: "clientId",
      });
    }
  }
  Client.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
