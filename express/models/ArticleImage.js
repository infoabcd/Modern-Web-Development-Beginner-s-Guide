const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ArticleImage = sequelize.define('ArticleImage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  article_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // 自动创建 createdAt 和 updatedAt 字段
});

module.exports = ArticleImage;