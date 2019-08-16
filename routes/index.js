const express = require('express');
const router = express.Router();

router.get('/api',function(req,res){
    let exposedAPIs = 
      [
        {
          "Method": "GET",
          "API": "/api/weather/current",
          "Desc": "Retrieves current weather of Default city i.e. Pune"
        },
        {
          "Method": "GET",
          "API": "/api/weather/current/:city",
          "Desc": "Retrieves current weather of requested city"
        },
        {
          "Method": "GET",
          "API": "/api/weather/prime",
          "Desc": "Retrieves Prime day weather of Default city i.e. Pune"
        },
        {
          "Method": "GET",
          "API": "/api/weather/prime/:city",
          "Desc": "Retrieves weather of requested city if current day is Prime"
        },
        {
          "Method": "GET",
          "API": "/api/weather/prime/:day",
          "Desc": "Retrieves weather of defauly city if requested day is Prime"
        },
        {
          "Method": "GET",
          "API": "/api/weather/prime/:city/:day",
          "Desc": "Retrieves weather of requested city if requested day is Prime"
        }
      ];
  
    res.json(exposedAPIs);
});

module.exports = router;