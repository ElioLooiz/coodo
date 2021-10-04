const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'coodo',
    'postgres',
    'eliolooiz',
    {
        host: '100.125.44.135',
        port: '5432',
        dialect: 'postgres'
    }
)