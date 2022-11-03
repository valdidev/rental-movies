const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Rol extends Model {};

Rol.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    member: {
        type: DataTypes.STRING
    }
},
{
    sequelize,
    modelName: 'rol'
});

module.exports = Rol;