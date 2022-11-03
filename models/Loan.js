const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/db");

class Loan extends Model {}

Loan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    start_loan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    loan_ends: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'loan',
  }
);

module.exports = Loan;
