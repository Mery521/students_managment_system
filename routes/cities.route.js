const express = require('express');
const router = express.Router();
const { getCitiesByCountryIdController } = require('../controllers/city.controller');

router.get('/:countryId', getCitiesByCountryIdController);

module.exports = router;
