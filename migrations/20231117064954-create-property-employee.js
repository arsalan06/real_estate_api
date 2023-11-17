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
        type: Sequelize.INTEGER,
        references: { model: "Properties", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: { model: "Employees", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: { model: "RoleTypes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
