'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('PropertyEmployees', 'propertyId', {
      type: Sequelize.INTEGER,
      references: { model: "Properties", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",     
       allowNull: false,
      validate: {
        notEmpty: { msg: "Property id is required" },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
