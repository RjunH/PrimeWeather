# PrimeWeather
Node.js RestFul APIs to fetch the current weather information

### List of exposed API

| Method        | API           | DESC  |
| ------------- | ------------- | ----- |
| GET           | /api/weather/current | Retrieves current weather of Default city i.e. Pune |
| GET           | /api/weather/current/:city | Retrieves current weather of requested city |
| GET           | /api/weather/prime | Retrieves weather information if current day is Prime ( Default city i.e. Pune ) |
| GET           | /api/weather/prime/:day | Retrieves weather information if requested day is Prime ( Default city i.e. Pune )  |
| GET           | /api/weather/prime/:day/:city |Retrieves weather information of requested city if requested day is Prime |


### Installations

* npm install

### To Run Server
(Assuming MongoDB sever is running locally on 127.0.0.1:27017)
* nodemon


### To Run Unit Tests

(Assuming you have installed mocha globally and node program listening on port 3000. Open another tab and run)

* mocha


