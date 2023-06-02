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
  description: {
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
  },
  qualification: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  family_income: {
    type: String,
    required: true
  },
  pdf_url: {
    type: String,
  },

});
const Scholarship = mongoose.model('Scholarship', scholarship_schema);
// module.exports = { Scholarship };


// Create an array of scholarships

  
  module.exports={Scholarship};