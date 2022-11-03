const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/db');

class Serie extends Model {}

Serie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    onAirUntil: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    toTheaterOrCinema: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    modelName: 'serie',
  }
);

module.exports = Serie;
