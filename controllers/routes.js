var express = require("express");
var router = express.Router();

var articles = require("../models/Articles.js");
var scrape = require("../models/scrape.js");
var orm = require("../config/orm");

router.get("/scrape", function (req, res) {
  // res.send("Test");
  scrape(function (data) {
    // console.log(data);
    res.render("index", { data });
  });
});

router.post("/api/article/save", function (req, res) {
  const headline = req.body.headline;
  const imgLink = req.body.imgLink;
  const summary = req.body.sum;
  const articleLink = req.body.articleLink;

  console.log("Heading: " + imgLink);
  orm.save({ headline, articleLink, summary, imgLink }, function (response) {
    console.log(response);
    res.json("SAVED ARTICLE");
  });
})

router.get("/api/article/saved", function (req, res) {
  // res.send("Test");
  orm.find(function (data) {
    res.render("saved", { data });
  });
});

router.delete("/api/article", function (req, res) {
  const id = req.params.id
  console.log(id);
  orm.delete(id, function (data) {
    res.render("saved", { data });
  })
});

module.exports = router;
