const mongoose = require('mongoose');

const UserRoleModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('UserRoles', UserRoleModel);