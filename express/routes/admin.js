const express = require('express');
const { authenticateJWT } = require('../middlewares/auth');

const router = express.Router();

// authenticateJWT 这个中间件解密了 Token
router.get('/', authenticateJWT, (req, res) => {
	// 对什么都不携带的嗅探返回 404
  if (!req.user || !req.user.role) {
    return res.status(404).json({ error: 'Pages Not Found.' });
  };

	// 对管理员返回 正常页面
  if (req.user.role == true) {
    res.json({ message: 'Welcome to the admin panel', user: req.user });
  };

	// 对普通用户返回 404
  if (req.user.role == false) {
    return res.status(404).json({ error: 'Pages Not Found.' });
  };
});

module.exports = router;