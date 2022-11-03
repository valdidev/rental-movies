const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Article extends Model {};

Article.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isMovie: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    rated: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 10
        }
    },
    year: {
        type: DataTypes.DATEONLY
    },
    poster: {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    modelName: 'article'
});

module.exports = Article;