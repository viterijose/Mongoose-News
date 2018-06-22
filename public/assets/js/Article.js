// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    // alert("click");
    // var id = $(this).data("id");
    // console.log(id)
    // var heading = $("a",this).text();
    // console.log(heading);
    var newArticle = {
      headline: $("a",this).text().trim(),
      imgLink: $("img").attr('src'),
      sum: $("p",this).text().trim(),
      articleLink : $("a").attr('href')
    }
    
    console.log(newArticle);
    $.ajax("/api/article/save", {
      type: "POST",
      data: newArticle
    }).then(
      function() {
        console.log("Article saved");
        // Reload the page to get the updated list
        // location.reload();
      }
    );
  });

});
