const { Sequelize } = require('sequelize');

exports.connection = new Sequelize('usermanagement', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})



