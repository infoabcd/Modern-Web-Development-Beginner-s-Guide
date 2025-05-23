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
}, {
  tableName: 'article',
  timestamps: false,                // 禁用自动生成的 timestamps 字段
});

module.exports = Article;