var path = require('../lib/index').path;

describe('distance', function () {
  it('should return calculated distance value in meters if no options.units is set', function () {
    var distanceInFeet = path([[-95, 29], [-96, 30], [-94, 33]]).distance();
    expect(distanceInFeet).toBeCloseTo(531098, 0);
  });
  it('should return calculated distance value in meters if options.units === meters', function () {
    var distanceInFeet = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'meters'
    });
    expect(distanceInFeet).toBeCloseTo(531098, 0);
  });
  it('should return calculated distance value in feet if options.units === feet', function () {
    var distanceInFeet = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'feet'
    });
    expect(distanceInFeet).toBeCloseTo(1742447, 0);
  });
  it('should return calculated distance value in kilometers if options.units === kilometers', function () {
    var distanceInFeet = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'kilometers'
    });
    expect(distanceInFeet).toBeCloseTo(531.098, 3);
  });
  it('should return calculated distance value in miles if options.units === miles', function () {
    var distanceInFeet = path([[-95, 29], [-96, 30], [-94, 33]]).distance({
      units: 'miles'
    });
    expect(distanceInFeet).toBeCloseTo(330.009, 3);
  });
});