const express = require("express");
const app = express();
const connectDB = require("./db"); 
require("dotenv").config();

app.use(express.urlencoded({ extended: true }))

connectDB().then(mongoose => {
    const PORT = process.env.PORT || 3000;
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    });
  
  }).catch(err => {
    console.error('Error connecting to database:', err);
  });