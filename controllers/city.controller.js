const { getCitiesByCountryId } = require('../services/city.service');

async function getCitiesByCountryIdController(req, res) {
  const { countryId } = req.params;
  try {
    const cities = await getCitiesByCountryId(countryId);
    res.json(cities);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getCitiesByCountryIdController,
};
