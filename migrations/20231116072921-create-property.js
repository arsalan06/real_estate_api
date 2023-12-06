"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      propertyTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "PropertyTypes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "propertyTypeId is required" },
        },
      },
      address: {
        type: Sequelize.STRING,
        validate:{
          notEmpty:{msg:"Address is required"}
        }
      },
      city: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      propertySize: {
        type: Sequelize.STRING,
      },
      blockSize: {
        type: Sequelize.STRING,
      },
      badRooms: {
        type: Sequelize.INTEGER,
      },
      bathRooms: {
        type: Sequelize.INTEGER,
      },
      carSpace: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};
