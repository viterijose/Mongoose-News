
var mongoose = require("mongoose");

// var connection = mongoose.connect("mongodb://localhost/ArticlesSchema");
var connection = process.env.MONGODB_URI || "mongodb://localhost/ArticlesSchema";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(connection);
// Export connection for our ORM to use.
module.exports = connection;

