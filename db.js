const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'coodo',
    'elio',
    'eliolooiz',
    {
        host: '212.41.23.165',
        port: '6432',
        dialect: 'postgres'
    }
)