const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const router = express.Router();

// 用户登录接口
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 查找用户
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 生成 JWT ////////// 追加 user.role //////////
    const token = generateToken({ id: user.id, username: user.username, role: user.role });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;