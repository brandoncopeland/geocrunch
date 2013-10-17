// path.js - Object for working with a linear path of coordinates

var flipCoords = require('./flipcoords');

var Path = function (coords, options) {
  this._options = options || {};

  // Set this._coords... Think about flipping at time of calcs for less iterations/better perf. May risk code clarity and mixin ease.
  coords = coords || [];
  this._coords = this._options.imBackwards === true ? flipCoords(coords) : coords;
};

module.exports = Path;
