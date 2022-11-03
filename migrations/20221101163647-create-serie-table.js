"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      onAirUntil: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      toTheaterOrCinema: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      articleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "articles",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
