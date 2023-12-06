'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientInterest extends Model {
    static associate(models) {
      // define association here
    }
  }
  ClientInterest.init({
  }, {
    sequelize,
    modelName: 'ClientInterest',
  });
  return ClientInterest;
};