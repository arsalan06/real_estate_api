"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PropertyEmployees", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      propertyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Properties", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Property id is required" },
        },
      },
      employeeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Employees", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Employee id is required" },
        },
      },
      roleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "RoleTypes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Role id is required" },
        },
      },
      startDate: {
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("PropertyEmployees");
  },
};
