
var mongoose = require("mongoose");

var connection = mongoose.connect("mongodb://localhost/JoseSchema");
// Export connection for our ORM to use.
module.exports = connection;

