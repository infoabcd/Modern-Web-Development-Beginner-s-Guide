const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  release_level: {
    type: DataTypes.CHAR(6), // 固定6字符长度
    allowNull: false,
    unique: true, // 保证每个 release_level 唯一
  },
}, {
  tableName: 'article',
  timestamps: false,
});

module.exports = Article;