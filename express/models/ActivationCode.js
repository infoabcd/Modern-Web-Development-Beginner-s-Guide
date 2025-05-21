const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ActivationCode = sequelize.define('activation_code', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  valid_day: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_permanent: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  is_used: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  user_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = ActivationCode;