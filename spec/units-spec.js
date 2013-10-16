var units = require('../lib/units');

describe('units', function () {

  describe('.meters', function () {
    it('should convert to feet', function () {
      expect(units.meters.toFeet(26)).toBeCloseTo(85.3018, 4);
    });
    it('should convert to kilometers', function () {
      expect(units.meters.toKilometers(54189)).toBe(54.189);
    });
  });

  describe('.degrees', function () {
    it('should convert to radians', function() {
      expect(units.degrees.toRadians(26.45)).toBeCloseTo(0.46164, 5);
    });
  });
});