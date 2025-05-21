const jwt = require('jsonwebtoken');

// 定义密钥和过期时间
const JWT_SECRET = 'jwt_testPasswd';  // JWT 密钥
const JWT_EXPIRES_IN = '4h';          // Token 有效期

// 生成 JWT
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

// 验证 JWT
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = { generateToken, verifyToken };