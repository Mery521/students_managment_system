const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        mongoose.connect(DB_URL, {})
        .then(()=>{
            console.log("Connected to the Database!");
        })
        .catch(err => {
            console.log(err);
        });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    }
  };
  
  module.exports = connectDB;