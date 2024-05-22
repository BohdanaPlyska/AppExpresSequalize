const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'users_sq',
    'postgres',
    'Bohdashka',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

module.exports = sequelize;
