'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { INTEGER, DATE, FLOAT } = Sequelize;
    await queryInterface.createTable('test', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      temperature: FLOAT(30),
      humidity: FLOAT(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('test');
  }
};
