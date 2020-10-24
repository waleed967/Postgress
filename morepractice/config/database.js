const Sequelize = require('sequelize');

//Setting Connection
module.exports = new Sequelize('codegigs', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres',
    port: '8080',
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000

    }
});