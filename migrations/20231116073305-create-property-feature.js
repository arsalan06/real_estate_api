"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PropertyFeatures", {
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
      featureId: {
        type: Sequelize.INTEGER,
        references: { model: "Features", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("PropertyFeatures");
  },
};
