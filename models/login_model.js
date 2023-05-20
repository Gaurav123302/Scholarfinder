//creating schema for login page
const mongoose = require('mongoose');

const login_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});
const login = mongoose.model('login',login_schema);
module.exports = {login};
