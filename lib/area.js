// distance.js - Distance mixins for Paths

var _ = require('underscore');

var R = require('./constants').EARTHRADIUS;
var units = require('./units');

// Area conversions (from sqmeters)
var convertFuncs = {
  sqmeters: function (a) {
    return a;
  },
  sqmiles: function (a) {
    return units.sqmeters.toSqMiles(a);
  },
  acres: function (a) {
    return units.sqmeters.toAcres(a);
  }
};

// Calculates area in square meters
// Method taken from OpenLayers API, https://github.com/openlayers/openlayers/blob/master/lib/OpenLayers/Geometry/LinearRing.js#L270
var calcArea = function (coordArray) {
  var area = 0, i, l, c1, c2;
  for (i = 0, l = coordArray.length; i < l; i += 1) {
    c1 = coordArray[i];
    c2 = coordArray[(i + 1) % coordArray.length]; // Access next item in array until last item is i, then accesses first (0)
    area = area + units.degrees.toRadians(c2[0] - c1[0]) * (2 + Math.sin(units.degrees.toRadians(c1[1])) + Math.sin(units.degrees.toRadians(c2[1])));
  }
  return Math.abs(area * R * R / 2);
};

module.exports = {
  _internalAreaCalc: function () {
    // If not set, set this._calcedArea to total area in UNITS
    // Checks for cache to prevent additional unnecessary calcs
    if (!this._calcedArea) {
      if (this._coords.length < 3) {
        this._calcedArea = 0;
      } else {
        this._calcedArea = calcArea(this._coords);
      }
    }
  },
  area: function (options) {
    var opts = _.extend({
      units: 'sqmeters'
    }, options);
    this._internalAreaCalc();
    if (_.isFunction(convertFuncs[opts.units])) {
      return convertFuncs[opts.units](this._calcedArea);
    }
    // TODO. Handle non-matching units
  }
};