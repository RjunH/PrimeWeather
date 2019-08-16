const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const Weather = new Schema ({ 
    "coord":{ 
       "lon": {type: SchemaTypes.Double, require: true},
       "lat": {type: SchemaTypes.Double, require: true}
    },
    "weather":[ 
       { 
          "id": {type: Number, require: true},
          "main":{type: String, require: true},
          "description":{type: String, require: true},
          "icon":{type: String}
       }
    ],
    "base":{type: String, require: true},
    "main":{ 
       "temp":{type: SchemaTypes.Double, require: true},
       "pressure":{type: SchemaTypes.Double, require: true},
       "humidity":{type: SchemaTypes.Double, require: true},
       "temp_min":{type: SchemaTypes.Double, require: true},
       "temp_max":{type: SchemaTypes.Double, require: true},
       "sea_level":{type: SchemaTypes.Double, require: true},
       "grnd_level":{type: SchemaTypes.Double, require: true}
    },
    "wind":{ 
       "speed":{type: SchemaTypes.Double, require: true},
       "deg":{type: SchemaTypes.Double, require: true}
    },
    "rain":{ 
       "3h":{type: SchemaTypes.Double}
    },
    "clouds":{ 
       "all":{type: Number, require: true}
    },
    "dt":{type: Number, require: true},
    "sys":{ 
       "message":{type: SchemaTypes.Double},
       "country":{type: String, require: true},
       "sunrise":{type: Number, require: true},
       "sunset":{type: Number, require: true}
    },
    "timezone":{type: Number, require: true},
    "id":{type: Number, require: true},
    "name":{type: String, require: true},
    "cod":{type: Number}
 }
 );

module.exports = mongoose.model('Weather', Weather)