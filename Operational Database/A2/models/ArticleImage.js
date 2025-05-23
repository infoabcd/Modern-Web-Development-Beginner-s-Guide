const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ArticleImage = sequelize.define('ArticleImage', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  release_level: {
    type: DataTypes.CHAR(6), // 固定6字符长度
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'article_image',
  timestamps: false,
});

module.exports = ArticleImage;