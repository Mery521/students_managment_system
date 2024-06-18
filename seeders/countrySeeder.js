const mongoose = require('mongoose');
const Countries = require('../models/country.model');
const Cities = require('../models/city.model');
require('dotenv').config();

const countries = [
  { name: 'Armenia' },
  { name: 'Georgia' },
  { name: 'Italy' },
  // Add more countries here
];

const cities = [
  { name: 'Yerevan', country_id: null },
  { name: 'Tbilisi', country_id: null },
  { name: 'Rome', country_id: null },
  { name: 'Milan', country_id: null },
  // Add more cities here
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    await Countries.deleteMany({});
    await Cities.deleteMany({});

    const createdCountries = await Countries.insertMany(countries);

    cities[0].country_id = createdCountries[0]._id;
    cities[1].country_id = createdCountries[1]._id;
    cities[2].country_id = createdCountries[2]._id;
    cities[3].country_id = createdCountries[2]._id;

    await Cities.insertMany(cities);

    console.log('Seeders executed successfully.');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from the database.");
  }
}

seedDatabase();
