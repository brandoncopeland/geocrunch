var _ = require('underscore');

var coordToCoord = require('./coordtocoord');
var units = require('./units');

var convertFuncs = {
  meters: function (distanceMeters) {
    return distanceMeters;
  },
  feet: function (distanceMeters) {
    return units.meters.toFeet(distanceMeters);
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