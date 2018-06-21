var request = require("request");
var cheerio = require("cheerio");
var scrape = function(cb){
// app.get("/scrape", function (req, res) {
  request("https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page", function (error, response, html) {
  
    var $ = cheerio.load(html);
    articles = [];

    $(".theme-summary").each(function (i, element) {

      var head = $(this).children(".story-body").children(".headline").text().trim();
      var thumb = $(this).children(".media").children("a").children("img").attr("src");
      var sum = $(this).children(".story-body").children(".summary").text().trim();
      var link = $(this).children(".story-body").children(".headline").children("a").attr("href");

      let data = ({
        heading : head,
        link : link,
        summary: sum,
        thumb: thumb
      });
      articles.push(data)
    });
    // console.log(articles);
    cb(articles);
  });

// });
}
module.exports = scrape;