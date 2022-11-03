"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'articles',
      [
        {
          title: "gladiator",
          isMovie: true,
          rated: 8,
          year: "2000-04-25",
          poster: "url img gladiator",
        },
        {
          title: "it",
          isMovie: true,
          rated: 4,
          year: "2017-09-08",
          poster: "url img it",
        },
        {
          title: "star wars",
          isMovie: true,
          rated: 7,
          year: "1977-09-07",
          poster: "url img gladiator",
        },
        {
          title: "moulin rouge",
          isMovie: true,
          rated: 5,
          year: "2001-10-11",
          poster: "url moulin rouge",
        },
        {
          title: "how i met your mother",
          isMovie: false,
          rated: 7,
          year: "2005-09-19",
          poster: "url img how",
        },
        {
          title: "the simpsons",
          isMovie: false,
          rated: 9,
          year: "1989-12-17",
          poster: "url simpsons",
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