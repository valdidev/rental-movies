'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('articles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isMovie: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    rated: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    year: {
        type: Sequelize.DATEONLY
    },
    poster: {
        type: Sequelize.STRING
    }
     });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
