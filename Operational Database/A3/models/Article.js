const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  releaseLevel: { // 映射到数据库中的 `Release level`
    type: DataTypes.CHAR(6),
    allowNull: false,
    unique: true,
    field: 'Release level', // 映射数据库字段名
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
  timestamps: false,
});

module.exports = Article;