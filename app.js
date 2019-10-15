const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const personRoute = require('./routes/person');
const db = require('./db');

app.use(bodyParser.json());
app.use('/person', personRoute);

db.connect();

app.listen(3000);

module.exports = app;