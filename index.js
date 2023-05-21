const express = require('express');
const port = 5600;
const path = require('path');

//connection to the databases
const connect = require('./config/scholarship_details');

//for connection to the schema of databases
const {Scholarship} = require('./models/scholarship_model');

const app = express();

//app.use() is used as middleware as parser acts as middleware. parser ??
// parser is used to read data enterd by user and store it.
app.use(express.urlencoded());
app.use(express.json());

//to use css using static
app.use(express.static(path.join(__dirname, '/assets')));


// Route to display the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/eligibility',(req,res) =>{
    res.sendFile(__dirname + '/check-eligibility.html');
});

app.get('/privacy-policy',(req,res) =>{
  res.sendFile(__dirname + '/privacy-policy.html');
});

app.get('/contact-us',(req,res) =>{
  res.sendFile(__dirname + '/contact-us.html');
});

app.get('/about',(req,res) =>{
  res.sendFile(__dirname + '/about.html');
});


// app.post('/scholarships',(req,res) =>{
//     const details = req.body;
// });

// Read Operation
app.get('/scholarships/:id', (req, res) => {
    const scholarshipId = req.params.id;
    Scholarship.findById(scholarshipId)
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
  
    Scholarship.findByIdAndUpdate(scholarshipId, {
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

  //below code will handle search and filter requests
  //we have to create a route for this
  app.get('/filter', async (req, res) => {
    const { keyword, nationality, scholarship_no } = req.query;
    let query = {};
  
    // Apply filters
    if (scholarship_no) {
      query.scholarship_no = scholarship_no;
    }
    if (nationality) {
      query.nationality = nationality;
    }
    if (keyword) {
      query.$or = [
        { name: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } }
      ];
    }
  
    try {
      // Retrieve scholarships based on the query
      const retrieved_scholarships = await Scholarship.find(query);
      res.json(retrieved_scholarships);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve scholarships' });
    }
  });
  
  


app.listen(port,function(err){
    if(err){
        console.log("error found!!",err);
    }
    console.log("your express server is running at port:",port);
});