const express = require('express');
const router = express.Router();
const { getCountriesController } = require('../controllers/country.controller');

router.get('/', getCountriesController);

module.exports = router;
