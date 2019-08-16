const express = require('express');
const router = express.Router();
const weather = require('../controllers/weather');

router.get('/current', weather.retrieveWeatherByCity);
router.get('/current/:city', weather.retrieveWeatherByCity);

router.get('/prime', weather.retrievePrimeDayWeather);
router.get('/prime/:city', weather.retrievePrimeDayWeather);
router.get('/prime/:day', weather.retrievePrimeDayWeather);
router.get('/prime/:city/:day', weather.retrievePrimeDayWeather);

router.get('*',function (req, res) {
    res.redirect('/api');
});

  
module.exports = router;