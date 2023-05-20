// currently we are entering data manually
const mongoose = require('mongoose');
const { scholarship } = require('../models/scholarship_model');

mongoose.connect('mongodb://127.0.0.1/scholarship_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'error found!!'));

//server is connected and running
db.once('open',function(){
    console.log('congrats!! you have connected to database');
});

    const details = { name, scholarship_no, description, closing_date, category, nationality };

    // Create a scholarship document
    const newScholarship = new scholarship({
      name: 'Example Scholarship',
      scholarship_no: 123456,
      description: 'This is an example scholarship.',
      closing_date: new Date('2023-06-30'),
      category: 'Science',
      nationality: 'International'
    });

    // Save the scholarship document
    newScholarship.save()
      .then(() => {
        console.log('Scholarship document saved successfully');
        mongoose.disconnect(); // Disconnect from the MongoDB server
      })
      .catch(error => {
        console.error('Error saving scholarship document:', error);
        mongoose.disconnect(); // Disconnect from the MongoDB server
      });
 
