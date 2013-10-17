var flipCoords = require('../lib/flipcoords');

describe('flipcoords', function () {
  it('should flip each coordinate pair in array', function () {
    expect(flipCoords([[1, 0], [5, 9], [245, 64]])).toEqual([[0, 1], [9, 5], [64, 245]]);
  });
});