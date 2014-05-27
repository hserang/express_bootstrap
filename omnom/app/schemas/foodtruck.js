var mongoose = require('mongoose');

var FoodTruckSchema = new mongoose.Schema({
    "location" : {
      "needs_recoding" : Boolean,
      "longitude" : Number,
      "latitude" : Number,
    },
    "status" : String,
    "expirationdate" : Date,
    "permit" : String,
    "block" : String,
    "received" : String,
    "facilitytype" : String,
    "blocklot" : String,
    "locationdescription" : String,
    "cnn" : String,
    "priorpermit" : String,
    "approved" : Date,
    "schedule" : String,
    "address" : String,
    "applicant" : String,
    "lot" : String,
    "fooditems" : String,
    "longitude" : Number,
    "latitude" : Number,
    "objectid" : {type: Number, index: {unique: true}},
    "y" : Number,
    "x" : Number
  });

  module.exports = FoodTruckSchema;
