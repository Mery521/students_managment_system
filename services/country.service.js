const Country = require('../models/country.model');

async function getCountries() {
  try {
    const countries = await Country.find();
    return countries;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getCountries,
};
