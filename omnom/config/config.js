"use strict";

var config = {},
    mongoUrl = {
      development: 'mongodb://localhost/omnom_dev'
    };

config.mongoUrl = mongoUrl[ || 'development']

module.exports = config;
