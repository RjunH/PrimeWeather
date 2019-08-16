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
          console.log('error:', err);
          cb(err, null);
        } 
        
        let openWeatherRes = JSON.parse(body);
        if(openWeatherRes.cod == 200){
            cb(null, openWeatherRes);
        }else{
            console.log(openWeatherRes);
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
                console.log('Unable to save Weather to database');
                return res.status(500).send(err);
            } 

            console.log('Weather saved to DB successfully');
            res.send(newWeather);
            
        });
    })
};

function retrievePrimeDayWeather(req, res){
    let day = req.params.day;
    let currentDate = new Date(); //December 11, 2019 23:15:00
    if(day){
        currentDate.setDate(day);
    }

    if(isPrime(currentDate.getDate())){
        retrieveWeatherByCity(req, res);
    }else{
        res.status(400).send('Date is not prime so no date');
    }
}


function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<=sqrtnum; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }



exports.retrieveWeatherByCity = retrieveWeatherByCity;
exports.retrievePrimeDayWeather = retrievePrimeDayWeather;