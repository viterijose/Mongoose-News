var express = require("express");
var router = express.Router();

var articles = require("../models/Articles.js");
var scrape = require("../models/scrape.js");
var orm = require("../config/orm")
router.get("/scrape", function(req, res) {
  // res.send("Test");
  scrape(function(data){
    // console.log(data);
    res.render("index", {data});
  });
});
router.post("/api/article/save", function(req,res){
  const headline = req.body.headline;
  const imgLink = req.body.imgLink;
  const sum = req.body.sum;
  const articleLink = req.body.articleLink;

  console.log("Heading: "+imgLink);
  orm.save({headline,imgLink,sum,articleLink}, function(response){
    console.log(response);
    res.json("SAVED ARTICLE");
  });
})

module.exports = router;


// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });