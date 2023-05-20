const express = require('express');
const port = 5600;
const path = require('path');

//connection to the databases
const connect = require('./config/scholarship_details');

//for connection to the schema of databases
const {scholarship} = require('./models/scholarship_model');

const app = express();

//app.use() is used as middleware as parser acts as middleware. parser ??
// parser is used to read data enterd by user and store it.
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('assets'));

app.post('/scholarships',(req,res) =>{
    const details = req.body;
});

// Read Operation
app.get('/scholarships/:id', (req, res) => {
    const scholarshipId = req.params.id;
    scholarship.findById(scholarshipId)
      .then(scholarship => {
        if (!scholarship) {
          res.status(404).json({ error: 'Scholarship not found' });
        } else {
          res.json(scholarship);
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to fetch scholarship' });
      });
  });

// Update Operation
app.put('/scholarships/:id', (req, res) => {
    const scholarshipId = req.params.id;
    const { name, scholarship_no, description, closing_date, category, nationality } = req.body;
  
    scholarship.findByIdAndUpdate(scholarshipId, {
      name,
      scholarship_no,
      description,
      closing_date,
      category,
      nationality
    }, { new: true }) // { new: true } ensures that the updated scholarship is returned
      .then(updatedScholarship => {
        if (!updatedScholarship) {
          return res.status(404).json({ error: 'Scholarship not found' });
        }
        res.json(updatedScholarship);
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to update scholarship' });
      });
  });
  


app.listen(port,function(err){
    if(err){
        console.log("error found!!",err);
    }
    console.log("your express server is running at port:",port);
});