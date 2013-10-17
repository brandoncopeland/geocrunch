var path = require('../lib/geocrunch').path;

describe('area', function () {
  it('should return calculated area value in sqmeters if no options.units is set', function () {
    var area = path([[-95, 29], [-96, 30], [-94, 33]]).area();
    expect(area).toBeCloseTo(26572869358, 0);
  });
  it('should return calculated area value in sqmeters if options.units === sqmeters', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).area({
      units: 'sqmeters'
    });
    expect(distance).toBeCloseTo(26572869358, 0);
  });
  it('should return calculated area value in sqmiles if options.units === sqmiles', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).area({
      units: 'sqmiles'
    });
    expect(distance).toBeCloseTo(10259.84, 2);
  });
  it('should return calculated area value in acres if options.units === acres', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).area({
      units: 'acres'
    });
    expect(distance).toBeCloseTo(6566288.88, 2);
  });
});