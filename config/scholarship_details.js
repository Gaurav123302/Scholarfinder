// currently we are entering data manually
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const { scholarship } = require('../models/scholarship_model');

mongoose.connect('mongodb://127.0.0.1/scholarship_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error found!!'));

//server is connected and running
db.once('open',function(){
    console.log('congrats!! you have connected to database');
});
