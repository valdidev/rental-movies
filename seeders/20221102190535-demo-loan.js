'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'loans', 
      [
        {
          start_loan: '2022-07-10 00:00:00',
          loan_ends: '2022-07-25 00:00:00',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          start_loan: '2022-08-04 00:00:00',
          loan_ends: '2022-08-19 00:00:00',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          start_loan: '2022-10-03 00:00:00',
          loan_ends: '2022-10-18 00:00:00',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          start_loan: '2022-11-04 00:00:00',
          loan_ends: '2022-11-19 00:00:00',
          userId: 3,
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
