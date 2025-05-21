const express = require('express');
const { verifyLogin } = require('../middlewares/verify'); // 验证登录中间件
const { Article } = require('../models')

const router = express.Router();

// 获取文章详情
router.get('/articles/:id', verifyLogin, async (req, res) => {
  const { id } = req.params;
  const user = req.user; // 假设登录信息通过中间件解析到 req.user

  try {
    const article = await Article.findByPk(id, {
      attributes: user
        ? ['title', 'content', 'images'] // 登录用户可以看到所有字段
        : ['title', 'content'],          // 游客只能看到 title 和 content
    });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;