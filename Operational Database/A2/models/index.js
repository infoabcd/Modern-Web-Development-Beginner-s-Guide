const Article = require('./Article');
const ArticleImage = require('./ArticleImage');

// 定义关联关系
Article.hasMany(ArticleImage, {
  foreignKey: 'release_level',  // 通过 release_level 进行关联
  sourceKey: 'release_level',  // article 的 release_level
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

ArticleImage.belongsTo(Article, {
  foreignKey: 'release_level',  // article_image 的 release_level
  targetKey: 'release_level',  // article 的 release_level
});

module.exports = { Article, ArticleImage };