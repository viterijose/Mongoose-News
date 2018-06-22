var request = require("request");
var cheerio = require("cheerio");
var scrape = function (cb) {

  request("https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page", function (error, response, html) {

    const $ = cheerio.load(html);
    let articles = [];
    let i = 0;
    $(".theme-summary").each(function (i, element) {

      const headline = $(this).children(".story-body").children(".headline").text().trim();
      const imgLink = $(this).children(".media").children("a").children("img").attr("src");
      const summary = $(this).children(".story-body").children(".summary").text().trim();
      const articleLink = $(this).children(".story-body").children(".headline").children("a").attr("href");
      id = i++;
      if (!articleLink) {
        return articles;
      } else {
        const data = ({
          headline: headline,
          articleLink: articleLink,
          summary: summary,
          imgLink: imgLink,
          id: id
        });
        articles.push(data)
      }
    });
    // console.log(articles);
    cb(articles);
  });

}
module.exports = scrape;