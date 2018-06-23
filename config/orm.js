
var connection = require("../config/connection.js");
var Article = require("../models/Articles");
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
// Object for all our SQL statement functions.
var orm = {
  save: function (articleInfo, res) {
    Article.create(articleInfo)
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res(dbArticle);
        // console.log(dbArticle);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        // res.json(err);
        console.log(err);
      });
    // cb("SAVED")
  },
  find: function (res) {
    Article.find({})
      .then(function (dbArticle) {
        // console.log(dbArticle);
        res(dbArticle);
      })
      .catch(function (err) {
        console.log(err);
      })
  },
  delete: function (objectId, res) {
    Article.findByIdAndRemove(objectId)
      .then(function (dbArticle) {
        console.log(dbArticle);
        // res(dbArticle);
      })
      .catch(function (err) {
        console.log(err);
      })
  },
  update: function (data, res) {
    console.log(data);
    const objectId = data.id;
    const note = data.note;
    Article.findByIdAndUpdate(objectId,{"note":note})
      .then(function (dbArticle) {
        console.log(dbArticle);
      })
      .catch(function (err) {
        console.log(err);
      })
  }
};

module.exports = orm;
