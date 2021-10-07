const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('coodo', 'postgres', 'eliolooiz', {
  host: 'localhost',
  dialect: 'postgres'
});
