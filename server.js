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

<<<<<<< HEAD
mongoose.connect("mongodb://localhost/JoseSchema");

app.get("/scrape", function (req, res) {
  axios.get("https://www.nytimes.com/").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $("h2").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this).children().text();
      console.log(result.title);
      result.link = $(element).children().attr("href");
      console.log(result.link);

      // Create a new Article using the `result` object built from scraping
      db.create(result)
        .then(function (dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });

    // If we were able to successfully scrape and save an Article, send a message to the client
    res.send("Scrape Complete");
  });
});

// // Create an object containing dummy data to save to the database
// var data = {
//   skills: ["item1", "item2", "item3"],
//   boolean: false,
//   lastname:
//     "Ferguson",
//   age: 42,
//   name: "Kevin"
// };

// // Save a new Example using the data object
// kevModel.create(data)
//   .then(function (dbExample) {
//     // If saved successfully, print the new Example document to the console
//     console.log(dbExample);
//   })
//   .catch(function (err) {
//     // If an error occurs, log the error message
//     console.log(err.message);
//   });


app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
=======
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
>>>>>>> 8efc56aa90e600ea2b43921fd7d6ca76ee0c778b
