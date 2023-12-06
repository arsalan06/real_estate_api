"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Listings", {
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
      listingStatusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "ListingStatuses", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Listeing status id is required" },
        },
      },
      listingTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "ListingTypes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        validate: {
          notEmpty: { msg: "Listing type id is required" },
        },
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: { msg: "Price is required" },
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
    await queryInterface.dropTable("Listings");
  },
};
