var mongoose = require('mongoose');
    FoodTruckSchema = require('../schemas/foodtruck');
    FoodTruck = mongoose.model('User', FoodTruckSchema);

module.exports = FoodTruck;
