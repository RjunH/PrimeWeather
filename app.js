'use strict';
const express = require('express');
require('dotenv').config();
const app = express();

const db = require('./database/db');
const indexRoutes = require('./routes/index');
const weatherRoutes = require('./routes/weather');

app.use('/', indexRoutes);
app.use('/api/weather', weatherRoutes);


app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
      console.log('Server listening on port ' +app.get('port'));
});

