"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Properties", "propertyImages", {
      type: Sequelize.JSON, // Specify the data type of the new column
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Properties", "propertyImages");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
