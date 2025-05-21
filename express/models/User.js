const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {                         // 追加刚刚增加的列
  type: DataTypes.BOOLEAN,
  defaultValue: false,
}
}, {
  timestamps: true,        // 自动创建 createdAt 和 updatedAt 字段
});

module.exports = User;