// db connect
"use strict";

var mongoose = require('mongoose'),
    FoodTruckSchema = require('../schemas/foodtruck'),
    FoodTruck = mongoose.model('FoodTruck', FoodTruckSchema);

module.exports = FoodTruck;
