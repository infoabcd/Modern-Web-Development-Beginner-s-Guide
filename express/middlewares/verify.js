// 复用 verifyToken 作为 Token 合法性校验和解密。
const { verifyToken } = require('../utils/jwt');

function verifyLogin(req, res, next) {
	const authHeader = req.headers.authorization;
// 如果没有 Authorization 请求头，则视为未登录

	if (!authHeader) {
		console.log('No Authorization header found');
		req.user = null;
		return next();
	}
	
	// 提取 token（处理 Bearer 前缀）
	const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
	
	try {
		// 验证并解码 token
		const decoded = verifyToken(token);
		console.log('Decoded Token:', decoded);
		
		// 检查解码后的信息是否完整
		if (!decoded || !decoded.username) {
			console.error('Decoded token missing required fields:', decoded);
			req.user = null;
			return next();
		}
	
		req.user = decoded; // 将解码后的用户信息传递到后续中间件
		next();
	
	} catch (err) {
		console.error('Token verification failed:', err.message); // 打印具体错误信息
		req.user = null;
		next();
	}
}

module.exports = { verifyLogin };