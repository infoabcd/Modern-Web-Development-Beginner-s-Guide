const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('数据库名', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;