const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "full-name": {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    } 
});

module.exports = mongoose.model('User', userSchema);