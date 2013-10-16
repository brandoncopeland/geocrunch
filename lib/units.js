// units.js - standard unit conversions

exports.meters = {
  toFeet: function (m) {
    return m * 3.28084;
  },
  toKilometers: function (m) {
    return m / 1000;
  }
};

exports.degrees = {
  toRadians: function (d) {
    return d * Math.PI / 180;
  }
};