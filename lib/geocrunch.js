// geocrunch.js

var _ = require('underscore');

var Path = require('./path');
var distanceMixins = require('./distance');

exports.VERSION = require('../package').version;

_.extend(Path.prototype, distanceMixins);

exports.path = function (coords, options) {
  return new Path(coords, options);
};