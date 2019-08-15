'use strict';
let express = require('express');
let request = require('request');
let app = express();

let apiKey = '95a15dcee22045f493dec3f15895efb0';
let city = 'Mumbai, IN';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

app.get('/', function(req,res){
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        if(weather.cod == 200){
          res.send(weather);
        }else{
          let error = JSON.parse(body);
          console.log(error);
          res.send(error.message);
        }
      }
  });
})



app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
      console.log('Server listening on port ' +app.get('port'));
});

