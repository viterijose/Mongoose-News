
var mongoose = require("mongoose");

var connection = mongoose.connect("mongodb://localhost/ArticlesSchema");
// Export connection for our ORM to use.
module.exports = connection;

