var express = require("express");

var router = express.Router();

// var articles = require("../models/Articles.js");
var scrape = require("../models/scrape.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // res.send("Test");
  scrape(function(data){
    res.send(data);
  });
  // articles.all(function(data) {
  //   var hbsObject = {
  //     news: data
  //   };
  //   // console.log(hbsObject);
  //   res.send(hbsObject);
  // });
});



// Export routes for server.js to use.
module.exports = router;
