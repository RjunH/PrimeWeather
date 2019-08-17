# PrimeWeather
Node.js RestFul APIs to fetch the current weather information

### List of exposed API

| Method        | API           | DESC  |
| ------------- | ------------- | ----- |
| GET           | /api/weather/current | Retrieves current weather of Default city i.e. Pune |
| GET           | /api/weather/current/:city | Retrieves current weather of requested city |
| GET           | /api/weather/weather/prime | Retrieves weather information if current day is Prime ( Default city i.e. Pune ) |
| GET           | /api/weather//api/weather/prime/:day | Retrieves weather information if requested day is Prime ( Default city i.e. Pune )  |
| GET           | /api/weather/prime/:day/:city |Retrieves weather information of requested city if requested day is Prime |


### Installations

* npm install

### To Run Server

* nodemon


### To Run Unit Tests

(Assuming you have installed mocha globally, run your node program and listen on port 3000. Open another tab and run)

* mocha


