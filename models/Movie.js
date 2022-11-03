const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Movie extends Model {};

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 30,
            max: 300
        }
    }
},
{
    sequelize,
    modelName: 'movie'
});

module.exports = Movie;