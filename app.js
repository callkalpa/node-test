const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use('/user', userRoute);

// database connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to database.');
});

app.listen(3000);