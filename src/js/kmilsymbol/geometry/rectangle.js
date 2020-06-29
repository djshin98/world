const corridor = require("./corridor");

// Draws rectangle from input feature
module.exports = function(feature) {
    // A rectangle is just a two point corridor
    return corridor(feature);
};