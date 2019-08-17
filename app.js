'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();
const db = require('./config/db');
const indexRoutes = require('./routes/index');
const weatherRoutes = require('./routes/weather');

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));                                                  
app.use(bodyParser.json({ type: 'application/json'}));  

app.use('/', indexRoutes);
app.use('/api/weather', weatherRoutes);
app.use(function(req, res, next) {
      return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});
app.use(function(err, req, res, next) {
      return res.status(500).send({ error: err });
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
      console.log('Server listening on port ' +app.get('port'));
});

