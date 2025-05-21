const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');    // Cookie 解析
const indexData = require('./routes/siteintro');
const indexRoutes = require('./routes/index');
const articleRoutes = require('./routes/article');
const registerRoutes = require('./routes/register');
const authRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');

const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(cookieParser());             // 使用 cookie-parser 中间件

// // 全局启用 CORS
// app.use(cors());

// CORS 配置
app.use(
  cors({
    origin: "http://localhost:5173", // 前端地址
    credentials: true,               // 允许携带 Cookie
  })
);

// 路由
app.use('/', indexRoutes);
app.use('/data', indexData);
app.use('/article', articleRoutes);
app.use('/register', registerRoutes);
app.use('/login', authRoutes);
app.use('/admin', adminRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});