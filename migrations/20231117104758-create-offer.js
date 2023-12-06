"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Offers", {
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
      offerStatusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "OfferStatuses", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "offer status id is required" },
        },
      },
      offerAmount: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Offers");
  },
};
