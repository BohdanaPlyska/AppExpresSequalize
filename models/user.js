const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

class User extends Model {}
User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, modelName: 'users' },
);

module.exports = User;
