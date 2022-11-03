'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users', 
      [
        {
          name: 'admin',
          lastname: 'admin',
          nick: 'admin',
          email: 'admin@root.com',
          rolId: 1
        },
        {
          name: 'juan',
          lastname: 'pico',
          nick: 'jpico',
          email: 'jpico@gmail.com',
          rolId: 2
        },
        {
          name: 'sara',
          lastname: 'gomez',
          nick: 'sgomez',
          email: 'sgomez@gmail.com',
          rolId: 2
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
