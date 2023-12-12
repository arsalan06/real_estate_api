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
    await queryInterface.addColumn("Inspections", "propertyId", {
      type: Sequelize.INTEGER,
      references: { model: "Properties", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
      validate: {
        notEmpty: { msg: "Property id is required" },
      },
    });
    await queryInterface.addColumn("Inspections", "employeeId", {
      type: Sequelize.INTEGER,
      references: { model: "Employees", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
      validate: {
        notEmpty: { msg: "Employee id is required" },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
