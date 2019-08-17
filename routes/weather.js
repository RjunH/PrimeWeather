const express = require('express');
const router = express.Router();
const weather = require('../controllers/weather');

router.get('/current', weather.retrieveWeatherByCity);
router.get('/current/:city', weather.retrieveWeatherByCity);

router.get('/prime', weather.retrieveWeatherOfPrimeDay);
router.get('/prime/:day', weather.retrievePrimeWeatherByDay);
router.get('/prime/:day/:city', weather.retrievePrimeWeatherByDay);

// router.get('*',function (req, res) {
//     res.redirect('/apis');
// });

  
module.exports = router;