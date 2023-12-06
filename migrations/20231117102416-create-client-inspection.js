"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ClientInspections", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Clients", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Client id is required" },
        },
      },
      inspectionsId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Inspections", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Inspection id is required" },
        },
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
    await queryInterface.dropTable("ClientInspections");
  },
};
