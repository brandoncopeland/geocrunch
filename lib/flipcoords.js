var _ = require('underscore');

module.exports = function (backwardsCoordArray) {
  return _.map(backwardsCoordArray, function (backwardsCoord) {
    return [backwardsCoord[1], backwardsCoord[0]];
  });
};