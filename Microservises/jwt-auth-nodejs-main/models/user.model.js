const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,

    },
    isAdmin: {
        type: Boolean,
    },
});

module.exports = mongoose.model('User', userSchema);