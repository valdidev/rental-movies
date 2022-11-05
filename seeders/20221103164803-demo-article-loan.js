'use strict';

// TODO - validation error

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'articlesloans', 
      [
        {
          articleId: 1,
          loanId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          articleId: 2,
          loanId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          articleId: 1,
          loanId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          articleId: 3,
          loanId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          articleId: 3,
          loanId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          articleId: 5,
          loanId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          articleId: 6,
          loanId: 4,
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
