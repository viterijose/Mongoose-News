
$(document).ready(function() {
  document.getElementById("scrape").addEventListener("click", function(){

    $.get("/scrape", function(data){
      console.log(data)
      if(data){
        $("body").html(data);
      }
    })

});
  // $("#scrape").on("onclick", function(event){
  //   alert("clicked");
  // })
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    // alert("click");
    // var id = $(this).data("id");
    // console.log(id)
    // var heading = $("a",this).text();
    // console.log(heading);
    var newArticle = {
      headline: $("a",this).text().trim(),
      imgLink: $("img",this).attr('src'),
      sum: $("p",this).text().trim(),
      articleLink : $("a",this).attr('href')
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

  $(".saved-articles").on("onclick", function(event) {

    $.GET("/api/article/saved",
      function() {
        console.log("Articles saved");
        // Reload the page to get the updated list
        // location.reload();
      }
    );
  });

  $(".delete-article").on("onclick", function (event){
    event.preventDefault();
    alert("Deleting article...")
    const id = $(this).data("id");
    console.log(id);
    $.ajax("/api/delete/article/"+id,{
      type: "DELETE"
    }).then(
      function(){
        console.log("Article deleted: "+id);
        location.reload();
      }
    )
  });
});
