var path = require('../lib/geocrunch').path;

describe('path', function () {

  describe('constructor', function () {
    it('should set internals', function () {
      var p = path([[-95, 29], [-96, 30]], {
        option1: true
      });
      expect(p._coords).toEqual([[-95, 29], [-96, 30]]);
      expect(p._options.option1).toBe(true);
    });
    it('should ensure coords are in the correct format with options.imBackwards', function () {
      var p = path([[-95, 29], [-96, 30]], {
        imBackwards: true
      });
      expect(p._coords).toEqual([[29, -95], [30, -96]]);
    });
  });
});