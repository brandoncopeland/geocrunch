var units = require('../lib/units');

describe('units', function () {
  describe('.meters', function () {
    it('should convert to feet', function () {
      expect(units.meters.toFeet(26)).toBe(85.30184);
    });
    it('should convert to kilometers', function () {
      expect(units.meters.toKilometers(54189)).toBe(54.189);
    });
  });
});