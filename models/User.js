import { sequelize } from '../db'
const { Sequelize, DataTypes } = require('sequelize')

export default sequelize.define(
  'User',
  {
    // Здесь определяются атрибуты модели
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      // allowNull по умолчанию имеет значение true
    },
  },
  {
    // Здесь определяются другие настройки модели
  }
)