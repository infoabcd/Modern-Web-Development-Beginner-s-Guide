const User = require('./User');
const Article = require('./Article');
const ArticleImage = require('./ArticleImage');
const ActivationCode = require('./ActivationCode');

// 用户与文章：一对多关系
User.hasMany(Article, {
  foreignKey: 'publisher_id',
  onDelete: 'CASCADE',
});
Article.belongsTo(User, {
  foreignKey: 'publisher_id',
});

// 文章与图片：一对多关系
Article.hasMany(ArticleImage, {
  foreignKey: 'article_id',       // 因为每个文章都是唯一的，图片应该和文章的 id 相对应，而非作者id。所以直接填写 article_id，直接使其匹配到 id 上。
  onDelete: 'CASCADE',
});
ArticleImage.belongsTo(Article, {
  foreignKey: 'article_id',
});


// 后添加 - 激活码功能 // user_by 与 主键ID 绑定
User.hasMany(ActivationCode, {
  foreignKey: 'user_by',
  onDelete: 'SET NULL',
});
ActivationCode.belongsTo(User, {
  foreignKey: 'user_by',
});

module.exports = { User, Article, ArticleImage, ActivationCode };