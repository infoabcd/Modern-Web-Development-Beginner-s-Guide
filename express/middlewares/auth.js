const { verifyToken } = require('../utils/jwt');

// 中间件：验证 JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 检查是否存在 Bearer Token
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = verifyToken(token);  // 验证 JWT
      req.user = decoded;                  // 将用户信息附加到请求对象
      next();                              // 放行
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  } else {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
};

module.exports = { authenticateJWT };