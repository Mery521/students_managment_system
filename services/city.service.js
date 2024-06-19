const City = require('../models/city.model');

async function getCitiesByCountryId(countryId) {
  try {
    const cities = await City.find({ country_id: countryId });
    return cities;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  getCitiesByCountryId,
};
