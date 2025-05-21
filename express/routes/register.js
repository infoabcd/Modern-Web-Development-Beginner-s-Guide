const express = require('express');
const { ActivationCode, User } = require('../models');
const bcrypt = require('bcrypt');     // 用于加密密码
const { Op } = require('sequelize');  // 引入 Sequelize 运算符

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password, email, code } = req.body;

    // 检查是否提供了激活码
    if (!code) {
        return res.status(400).json({ message: "The invitation code is empty." });
    }

    // 下面提供了两个思路
    // 用户名 直接用递交过来的 username(用户名) 为条件查询，看看是否存在。
    // 激活码 先查询所有的激活码，之后与递交过来的 code(激活码) 做匹配。

    try {
        // 检查用户名或邮箱是否已存在
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [                      // Sequelize 运算符，用于 OR 条件
                    { username: username },
                    { email: email }
                ]
            }
        });
        // 如果用户已存在
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        };

        // 查询所有未使用的激活码
        const aCode = await ActivationCode.findAll({
            attributes: ['code'], 
            where: { is_used: 0 },
        });

        // 提取激活码列表
        const codes = aCode.map(item => item.code);

        // 检查提供的激活码是否在未使用的激活码列表中
        if (codes.includes(code)) {
            // 匹配成功，返回成功响应
            // return res.json({ message: 'DONE' });

            // 匹配成功，激活码有效，保存用户信息
            const hashedPassword = await bcrypt.hash(password, 10); // 加密密码

            const newUser = await User.create({
                username,
                password: hashedPassword, // 存储加密后的密码
                email,
            });

            // 更新激活码状态为已使用
            await ActivationCode.update(
                { is_used: 1 }, // 设置为已使用
                { where: { code: code } }
            );

            return res.json({ message: 'Successful registration!' });

        } else {
            // 匹配失败，返回错误信息
            return res.status(404).json({ message: "The invitation code is invalid or used." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;