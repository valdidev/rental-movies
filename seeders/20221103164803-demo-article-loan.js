'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'articlesLoans', 
      [
        {
          articleId: 1,
          loanId: 1
        },
        {
          articleId: 2,
          loanId: 1
        },
        {
          articleId: 1,
          loanId: 2
        },
        {
          articleId: 3,
          loanId: 2
        },
        {
          articleId: 3,
          loanId: 3
        },
        {
          articleId: 5,
          loanId: 3
        },
        {
          articleId: 5,
          loanId: 3
        },
        {
          articleId: 6,
          loanId: 4
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
