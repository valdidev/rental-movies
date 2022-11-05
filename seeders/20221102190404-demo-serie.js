"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "series",
      [
        {
          premiereNewChapter: "2022-12-20",
          toTheaterOrCinema: false,
          articleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          premiereNewChapter: "2022-12-22",
          toTheaterOrCinema: true,
          articleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          premiereNewChapter: "2022-11-04",
          toTheaterOrCinema: true,
          articleId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          premiereNewChapter: "2022-11-10",
          toTheaterOrCinema: false,
          articleId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          premiereNewChapter: "2022-11-15",
          toTheaterOrCinema: false,
          articleId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          premiereNewChapter: "2022-11-08",
          toTheaterOrCinema: false,
          articleId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
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
