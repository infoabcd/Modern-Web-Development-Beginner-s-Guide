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
  article_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'article_image',
  timestamps: false,                    // 禁用自动生成的 timestamps 字段
});

module.exports = ArticleImage;