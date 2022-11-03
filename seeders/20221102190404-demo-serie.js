'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'series', 
        [
          {
            premiereNewChapter: '2022-12-20',
            toTheaterOrCinema: false,
            articleId: 5
          },
          {
            premiereNewChapter: '2022-12-22',
            toTheaterOrCinema: true,
            articleId: 6
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
