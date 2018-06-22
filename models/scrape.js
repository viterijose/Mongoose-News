var request = require("request");
var cheerio = require("cheerio");
var scrape = function (cb) {

  request("https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page", function (error, response, html) {

    const $ = cheerio.load(html);
    let articles = [];
    let i = 0;
    $(".theme-summary").each(function (i, element) {

      const head = $(this).children(".story-body").children(".headline").text().trim();
      const thumb = $(this).children(".media").children("a").children("img").attr("src");
      const sum = $(this).children(".story-body").children(".summary").text().trim();
      const link = $(this).children(".story-body").children(".headline").children("a").attr("href");
      id = i++;
      if (!link) {
        return articles;
      } else {
        const data = ({
          heading: head,
          link: link,
          summary: sum,
          thumb: thumb,
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