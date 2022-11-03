'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'rols', 
      [
        {
          member: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          member: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
