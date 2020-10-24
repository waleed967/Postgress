const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');

const app = express();

//Import Db

const db = require('./config/database');

//Test Connection

db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:' + err))

//Get Gig Routes

app.use('/gigs', require('./routes/gigs'));


app.get('/', (req, res) => res.send('INDEX'));
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));