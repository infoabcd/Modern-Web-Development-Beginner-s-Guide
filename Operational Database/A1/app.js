const sequelize = require('./database/database');
const { Article, ArticleImage } = require('./models');

(async () => {
  try {
    // 同步数据库
    await sequelize.sync({ alter: true }); // `alter: true` 会更新表结构
    console.log('数据库同步成功');

    const newArticle = await Article.create({
        title: 'Test Article',
        content: 'This is a test article.',
    });

    await ArticleImage.create({
        article_id: newArticle.id,
        image_url: 'https://example.com/image1.jpg',
    });

    console.log('数据插入成功');

	const articles = await Article.findAll({
		include: [
			{
			  model: ArticleImage,
			  required: false, // 即使没有关联图片，也返回文章
			},
		  ],
		});
		
	console.log(JSON.stringify(articles, null, 2));

  } catch (error) {
    console.error('数据库同步失败:', error);
  }
})();