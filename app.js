const express = require("express");
const app = express();
const connectDB = require("./db"); 
const cors = require('cors');
const countriesRouter = require('./routes/countries.route');
const citiesRouter = require('./routes/cities.route');
const studentsRouter = require('./routes/students.route');
require("dotenv").config();


app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

app.use('/students', studentsRouter);
app.use('/countries', countriesRouter);
app.use('/cities', citiesRouter);


connectDB().then(mongoose => {
    const PORT = process.env.PORT || 5000;
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    });
  
  }).catch(err => {
    console.error('Error connecting to database:', err);
  });