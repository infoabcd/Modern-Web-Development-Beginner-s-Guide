const Article = require('./Article');
const ArticleImage = require('./ArticleImage');

// 定义关联关系
Article.hasMany(ArticleImage, {
  foreignKey: 'article_id', // 外键字段
  sourceKey: 'id',          // 主键字段
  onDelete: 'CASCADE',      // 设置级联删除
  onUpdate: 'CASCADE',      // 设置级联更新
});

ArticleImage.belongsTo(Article, {
  foreignKey: 'article_id', // 外键字段
  targetKey: 'id',          // 目标主键字段
});

module.exports = { Article, ArticleImage };