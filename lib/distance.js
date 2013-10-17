var _ = require('underscore');

var coordToCoord = require('./coordtocoord');
var units = require('./units');

// Distance conversions (from meters)
var convertFuncs = {
  meters: function (d) {
    return d;
  },
  kilometers: function (d) {
    return units.meters.toKilometers(d);
  },
  feet: function (d) {
    return units.meters.toFeet(d);
  },
  miles: function (d) {
    return units.meters.toMiles(d);
  }
};

module.exports = {
  _internalDistanceCalc: function () {
    // If not set, set this._calcedDistance to total distance in meters
    // Checks for cache to prevent additional unnecessary calcs
    if (!this._calcedDistance) {
      this._calcedDistance = _.reduce(this._coords, function (memo, coord) {
        var distance = 0;
        if (memo.last) {
          distance = memo.total + coordToCoord.calcDistance(memo.last, coord);
        }
        return {
          total: distance,
          last: coord
        };
      }, {
        total: 0
      }).total;
    }
  },
  distance: function (options) {
    var opts = _.extend({
      units: 'meters'
    }, options);
    this._internalDistanceCalc();
    if (_.isFunction(convertFuncs[opts.units])) {
      return convertFuncs[opts.units](this._calcedDistance);
    }
    // TODO. Handle non-matching units
  }
};