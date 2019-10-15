const mongoose = require('mongoose');
const UserRoleModel = require('./UserRoles');

const PersonModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    contactNumber: {
        type: String
    },
    // userRoles: [UserRoleModel.schema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('People', PersonModel);