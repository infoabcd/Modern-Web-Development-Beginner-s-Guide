const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ArticleImage = sequelize.define('ArticleImage', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  level: { // 映射到数据库中的 `level`
    type: DataTypes.CHAR(6),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'image_url', // 映射数据库字段名
  },
}, {
  tableName: 'article_image',
  timestamps: false,
});

module.exports = ArticleImage;