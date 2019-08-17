'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();
const db = require('./database/db');
const indexRoutes = require('./routes/index');
const weatherRoutes = require('./routes/weather');

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));                                                  
app.use(bodyParser.json({ type: 'application/json'}));  

app.use('/', indexRoutes);
app.use('/api/weather', weatherRoutes);


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
      console.log('Server listening on port ' +app.get('port'));
});

