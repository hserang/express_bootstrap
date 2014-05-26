var mongoose = require('mongoose');

var FoodTruckSchema = new mongoose.Schema({
  name: String,
  location: String
});

module.exports = FoodTruckSchema;
