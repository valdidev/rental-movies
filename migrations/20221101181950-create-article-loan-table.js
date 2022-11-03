"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articlesLoans', {
      articleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id',
        },
      },
      loanId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'loans',
          key: 'id'
        }
        
      },
      
    })

    .then(() => {
      return queryInterface.addConstraint('articleLoans', ['articles_id', 'loans_id'], {
        type: 'primary key',
        name: 'articleLoans_id'
      });
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
