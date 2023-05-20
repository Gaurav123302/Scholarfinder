//creating schema for details of scholarship
const mongoose = require('mongoose');

const scholarship_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    scholarship_no: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    closing_date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }

});
const scholarship = mongoose.model('scholarship',scholarship_schema);
module.exports = {scholarship};