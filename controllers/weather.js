const path = require('path');
const Weather = require('../models/weather');
const request = require('request');

const openWeather_apiKey = process.env.OPENWEATHER_APIKEY;
var defaultCity = 'Pune, IN'; //default city


function getOpenWeatherByCity(requestedCity, cb){
    let city = requestedCity || defaultCity;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeather_apiKey}`;

    request(url, function (err, response, body) {
        if(err){
          cb(err, null);
        } 
        
        let openWeatherRes = JSON.parse(body);
        if(openWeatherRes.cod == 200){
            cb(null, openWeatherRes);
        }else{
            cb(openWeatherRes, null);
        }
          
      });
}

function retrieveWeatherByCity(req, res) {
    let requestedCity = req.params.city;
    getOpenWeatherByCity(requestedCity, function(err, response){
        if(err){
           return res.status(400).send(err);
        }

        var newWeather = new Weather(response);
        newWeather.save(function (err) {
            if(err) {
                return res.status(500).send(err);
            } 

            console.log('Weather data saved to DB successfully');
            res.send(newWeather);
            
        });
    })
};

function retrieveWeatherOfPrimeDay(req, res){   
    let currentDate = new Date(); //December 11, 2019 23:15:00

    if(isPrime(currentDate.getDate())){
        retrieveWeatherByCity(req, res);
    }else{
        return res.status(400).send({'mesage':'Date is not prime so no date'});
    }
}

function retrievePrimeWeatherByDay(req, res){
    let day = req.params.day;
   
    let currentDate = new Date();
    let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0);

    if(day && day <= lastDayOfMonth.getDate()){
        currentDate.setDate(day);
        if(isPrime(currentDate.getDate())){
            retrieveWeatherByCity(req, res);
        }else{
            return res.status(400).send({'message':'Date is not prime so no date'});
        }
    }else{
        return res.status(400).send({'message': 'Please provide the valid date of a month'}); 
    }
}


function isPrime(num) {
    let sqrtnum=Math.floor(Math.sqrt(num));
      let prime = num != 1;
      for(let i=2; i<=sqrtnum; i++) { 
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }



exports.retrieveWeatherByCity = retrieveWeatherByCity;
exports.retrieveWeatherOfPrimeDay = retrieveWeatherOfPrimeDay;
exports.retrievePrimeWeatherByDay = retrievePrimeWeatherByDay;