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
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "it",
          isMovie: true,
          rated: 4,
          year: "2017-09-08",
          poster: "url img it",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "star wars",
          isMovie: true,
          rated: 7,
          year: "1977-09-07",
          poster: "url img gladiator",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "moulin rouge",
          isMovie: true,
          rated: 5,
          year: "2001-10-11",
          poster: "url moulin rouge",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "how i met your mother",
          isMovie: false,
          rated: 7,
          year: "2005-09-19",
          poster: "url img how",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "the simpsons",
          isMovie: false,
          rated: 9,
          year: "1989-12-17",
          poster: "url simpsons",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "hereditary",
          isMovie: true,
          rated: 7,
          year: "2018-10-15",
          poster: "url hereditary",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "big bang theory",
          isMovie: false,
          rated: 8,
          year: "2014-08-02",
          poster: "url big bang",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "malcom",
          isMovie: false,
          rated: 4,
          year: "2006-10-02",
          poster: "url malcom",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "fresh prince",
          isMovie: false,
          rated: 9,
          year: "1996-04-06",
          poster: "url fresh",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "blacklight",
          isMovie: true,
          rated: 9,
          year: "2022-11-02",
          poster: "url black",
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
