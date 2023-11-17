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
        type: Sequelize.INTEGER,
        references: { model: "Properties", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      listingStatusId: {
        type: Sequelize.INTEGER,
        references: { model: "ListingStatuses", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      listingTypeId: {
        type: Sequelize.INTEGER,
        references: { model: "ListingTypes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      price: {
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
    await queryInterface.dropTable("Listings");
  },
};
