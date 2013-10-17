var path = require('../lib/geocrunch').path;

describe('distance', function () {
  it('should return calculated distance value in meters if no options.units is set', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).distance();
    expect(distance).toBeCloseTo(531098, 0);
  });
  it('should return calculated distance value in meters if options.units === meters', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'meters'
    });
    expect(distance).toBeCloseTo(531098, 0);
  });
  it('should return calculated distance value in feet if options.units === feet', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'feet'
    });
    expect(distance).toBeCloseTo(1742447, 0);
  });
  it('should return calculated distance value in kilometers if options.units === kilometers', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'kilometers'
    });
    expect(distance).toBeCloseTo(531.098, 3);
  });
  it('should return calculated distance value in miles if options.units === miles', function () {
    var distance = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'miles'
    });
    expect(distance).toBeCloseTo(330.009, 3);
  });
});