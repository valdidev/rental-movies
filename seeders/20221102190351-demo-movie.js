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
          articleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "horror",
          duration: 180,
          articleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "science fiction",
          duration: 220,
          articleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "romantic",
          duration: 210,
          articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "horror",
          duration: 190,
          articleId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          genre: "action",
          duration: 240,
          articleId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
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
