var units = require('../lib/units');

describe('units', function () {

  describe('.meters', function () {
    it('should convert to feet', function () {
      expect(units.meters.toFeet(26)).toBeCloseTo(85.3018, 4);
    });
    it('should convert to kilometers', function () {
      expect(units.meters.toKilometers(54189)).toBe(54.189);
    });
    it('should convert to miles', function () {
      expect(units.meters.toMiles(54189)).toBeCloseTo(33.6715, 4);
    });
  });

  describe('.sqMeters', function () {
    it('should convert to sqMiles', function () {
      expect(units.sqMeters.toSqMiles(4000000)).toBeCloseTo(1.54, 2);
    });
    it('should convert to acres', function () {
      expect(units.sqMeters.toAcres(4000000)).toBeCloseTo(988.42, 2);
    });
  });

  describe('.degrees', function () {
    it('should convert to radians', function() {
      expect(units.degrees.toRadians(26.45)).toBeCloseTo(0.46164, 5);
    });
  });
});