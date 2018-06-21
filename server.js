var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/routes.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


// app.get("/scrape", function (req, res) {
//   request("https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page", function (error, response, html) {
  
//     var $ = cheerio.load(html);
//     articles = [];

//     $(".theme-summary").each(function (i, element) {

//       var head = $(this).children(".story-body").children(".headline").text().trim();
//       var thumb = $(this).children(".media").children("a").children("img").attr("src");
//       var sum = $(this).children(".story-body").children(".summary").text().trim();
//       var link = $(this).children(".story-body").children(".headline").children("a").attr("href");

//       let data = ({
//         heading : head,
//         link : link,
//         summary: sum,
//         thumb: thumb
//       });
//       articles.push(data)
//     });
//     // console.log(articles);
//     res.send(articles);
//   });

// });
