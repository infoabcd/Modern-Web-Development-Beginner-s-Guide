const Article = require('./Article');
const ArticleImage = require('./ArticleImage');

// 定义关联关系
Article.hasMany(ArticleImage, {
  foreignKey: 'level',        // ArticleImage 的外键
  sourceKey: 'releaseLevel',  // Article 的目标键
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

ArticleImage.belongsTo(Article, {
  foreignKey: 'level',        // ArticleImage 的外键
  targetKey: 'releaseLevel',  // Article 的目标键
});

module.exports = { Article, ArticleImage };