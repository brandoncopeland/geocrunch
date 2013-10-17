var path = require('../lib/geocrunch').path;

describe('area', function () {
  it('should return calculated distance value in meters if no options.units is set', function () {
    var area = path([[-95, 29], [-96, 30], [-94, 33]]).area();
    expect(area).toBeCloseTo(26572869358, 0);
  });
});