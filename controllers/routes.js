var express = require("express");
var router = express.Router();

var articles = require("../models/Articles.js");
var scrape = require("../models/scrape.js");
var orm = require("../config/orm");

router.get("/", function (req, res) {

  res.render("index");

});
router.get("/scrape", function (req, res) {
  // console.log("Hit route")
  scrape(function (data) {
    // console.log(data);
    res.render("index", { data });
    // res.render("index", { data });
  });
});

router.post("/api/article/save", function (req, res) {
  const headline = req.body.headline;
  const imgLink = req.body.imgLink;
  const summary = req.body.sum;
  const articleLink = req.body.articleLink;

  // console.log("Heading: " + imgLink);
  orm.save({ headline, articleLink, summary, imgLink }, function (response) {
    // console.log(response);
    res.send("SAVED ARTICLE");
  });
})

router.get("/api/article/saved", function (req, res) {
  // res.send("Test");
  orm.find(function (data) {
    console.log("IN ROUTES :---------\n:"+data)
    res.render("saved", { data });
  });
});

router.delete("/api/article/:id", function (req, res) {
  const id = req.params.id
  // const id = "5b2d42c1d6fb710c21fd64c9"; //working with dummy test
  console.log(id);
  orm.delete(id, function (data) {
    res.render("saved", { data });
  })
});
router.post("api/article/note/:id", function (req, res) {
  const id = req.params.id;
  const note = req.body.note;
  // const id = "5b2d5ae1eb433f0c53ce196c";
  // const note = "Testing mongoose update";
  const newNote = {
    id: id,
    note: note
  }
  orm.update(newNote, function (data) {
    res.render("saved", { data });
  })

})

module.exports = router;
