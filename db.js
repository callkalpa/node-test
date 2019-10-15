const mongoose = require('mongoose');
require('dotenv').config();

function connect() {
    if (process.env.NODE_ENV === 'test') {
        const Mockgoose = require('mockgoose').Mockgoose;
        const mockgoose = new Mockgoose(mongoose);

        mockgoose.prepareStorage()
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
    } else {
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
            console.log('Connected to database.');
        });
    }
}

function close() {
    mongoose.disconnect();
}

module.exports = { connect, close };
