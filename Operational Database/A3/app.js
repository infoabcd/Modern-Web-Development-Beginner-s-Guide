const sequelize = require('./database/database');
const { Article, ArticleImage } = require('./models');

(async () => {
  try {
    await sequelize.sync({ alter: true }); // 更新数据库表结构
    console.log('数据库同步成功');

	const releaseLevel = 'ABC123';

	// 插入 Article 数据
	const newArticle = await Article.create({
		releaseLevel, // 自动映射到数据库的 `Release level`
		title: 'Test Article',
		content: 'This is a test article.',
	});
	
	// 插入关联的 ArticleImage 数据
		await ArticleImage.create({
		level: releaseLevel, // 与 Article 的 releaseLevel 保持一致
		imageUrl: 'https://example.com/image1.jpg',
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