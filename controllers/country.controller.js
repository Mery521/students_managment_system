const { getCountries } = require('../services/country.service');

async function getCountriesController(req, res) {
  try {
    const countries = await getCountries();
    res.json(countries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getCountriesController,
};
