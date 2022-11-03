'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'series', 
        [
          {
            onAirUntil: '2022-12-20',
            toTheaterOrCinema: false,
            articleId: 5
          },
          {
            onAirUntil: '2024-10-25',
            toTheaterOrCinema: false,
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
