// units.js - standard unit conversions

exports.meters = {
  toFeet: function (m) {
    return m * 3.28084;
  },
  toKilometers: function (m) {
    return m * 0.001;
  },
  toMiles: function (m) {
    return m * 0.000621371;
  }
};

exports.degrees = {
  toRadians: function (d) {
    return d * Math.PI / 180;
  }
};