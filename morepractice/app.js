const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');

//Setting Connection
const db = new Sequelize('codegigs', 'postgres', 'qwerty', {
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

//Test Connection

db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:' + err))



const app = express();
app.get('/', (req, res) => res.send('INDEX'));
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));