const sequelize = require('./database/database');
const { Article, ArticleImage } = require('./models');

(async () => {
  try {
    await sequelize.sync({ alter: true }); // 自动同步表结构
    console.log('数据库同步成功');

    const releaseLevel = Math.random().toString(36).substring(2, 8).toUpperCase(); // 生成随机6位 release_level

    // 插入文章
    const newArticle = await Article.create({
    title: 'Test Article',
    content: 'This is a test article.',
    release_level: releaseLevel, // 插入随机 release_level
    });

    // 插入关联图片
    await ArticleImage.create({
    release_level: releaseLevel, // 使用相同的 release_level 进行关联
    image_url: 'https://example.com/image1.jpg',
    });

    console.log('数据插入成功');

    const articlesWithImages = await Article.findAll({
    include: [
        {
        model: ArticleImage,
        required: false, // 即使没有关联图片也返回文章
        },
    ],
    });

    console.log(JSON.stringify(articlesWithImages, null, 2));
  } catch (error) {
    console.error('数据库同步失败:', error);
  }
})();