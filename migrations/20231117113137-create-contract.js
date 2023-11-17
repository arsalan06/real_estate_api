"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Contracts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      contractStatusId: {
        type: Sequelize.INTEGER,
        references: { model: "ContractStatuses", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      propertyId: {
        type: Sequelize.INTEGER,
        references: { model: "Properties", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: { model: "Clients", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      employeeId: {
        type: Sequelize.INTEGER,
        references: { model: "Employees", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      contractDocument: {
        type: Sequelize.STRING,
      },
      signedDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Contracts");
  },
};
