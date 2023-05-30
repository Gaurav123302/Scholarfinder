const express = require('express');
const port = 5600;
const path = require('path');
const ejs = require('ejs');

//connection to the databases
const connect = require('./config/scholarship_details');

//for connection to the schema of databases
const {Scholarship} = require('./models/scholarship_model');

const app = express();

//app.use() is used as middleware as parser acts as middleware. parser ??
// parser is used to read data enterd by user and store it.
app.use(express.urlencoded());
app.use(express.json());
app.set('view-engine','ejs');

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

// app.post("/scholarships/eligibily", async (req, res) => {
//   const {income, nation, caste, state, edu} = req.body

//   const data = await Scholarship.find()
//   console.log(data);
//   res.json(data)
// })

// Define a route to retrieve scholarship data and serve it as JSON
app.post('/api/scholarships', (req, res) => {
  // Retrieve the form input values from the request body
  const { income, nationality, caste, state, education, disability } = req.body;
  let data =Scholarship.find({})


  // Construct the filter object based on the form inputs
  const filter = {
    income: { $lte: parseInt(income) }, // Filter scholarships with income less than or equal to the provided value
    nationality: nationality,
    category: caste,
    state: state,
    education: education,
    disability: disability === 'yes' ? true : false,
  };

  // Query the scholarships collection in MongoDB with the filter
  Scholarship.find(filter)
    .then((scholarships) => {
      res.json(scholarships);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while retrieving scholarships.' });
    });
});




app.listen(port,function(err){
    if(err){
        console.log("error found!!",err);
    }
    console.log("your express server is running at port:",port);
});