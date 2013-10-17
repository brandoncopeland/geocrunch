var coordToCoord = require('../lib/utils/coordtocoord');

describe('coordToCoord', function () {

  describe('.calcDistance', function () {
    it('should calculate distance in meters for 2 reasonable passed coordinates', function () {
      expect(coordToCoord.calcDistance([-95.1423, 29.3322], [-94.3324, 34.5592])).toBeCloseTo(586211, 0);
    });
    it('should calculate the same distance regardless of direction', function () {
      var firstCalc = coordToCoord.calcDistance([-95.1423, 29.3322], [-94.3324, 34.5592]);
      var secondCalc = coordToCoord.calcDistance([-94.3324, 34.5592], [-95.1423, 29.3322]);
      expect(firstCalc).toEqual(secondCalc);
    });
  });

});