"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'movies',
      [
        {
          genre: "action",
          duration: 200,
          articleId: 1
        },
        {
          genre: "horror",
          duration: 180,
          articleId: 2
        },
        {
          genre: "science fiction",
          duration: 220,
          articleId: 3
        },
        {
          genre: "romantic",
          duration: 210,
          articleId: 4
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
