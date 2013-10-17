// geocrunch.js

var _ = require('underscore');

var Path = require('./path');
var distanceMixins = require('./distance'),
    areaMixins = require('./area');

_.extend(Path.prototype, distanceMixins, areaMixins);

exports.path = function (coords, options) {
  return new Path(coords, options);
};