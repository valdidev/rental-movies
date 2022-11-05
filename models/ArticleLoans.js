const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Article = require('./Article');
const Loan = require('./Loan');

const ArticleLoans = sequelize.define('articlesLoans',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    articleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Article,
            key: 'id'
        }
    },
    loanId: {
        type: DataTypes.INTEGER,
        references: {
            model: Loan,
            key: 'id'
        }
    }
    
});

module.exports = ArticleLoans;