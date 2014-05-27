var express = require('express'),
    router = express.Router(),
    Truck = require('../models/foodtruck');

router.get('/', function(req, res) {
  res.json({message: 'api works'});
});

router.get('/trucks', function(req, res) {
  Truck.find({}, function(err, trucks) {
    if (err) {
      return next(err);
    }

    res.json({title: 'Trucks', trucks: trucks});
  });
});

module.exports = router;

