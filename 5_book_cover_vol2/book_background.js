$(document).on("ready", function() {
  var currentBackgroundImage = 1;

  $(".js-book-cover").on("click", function() {    
    if(currentBackgroundImage <= 2) {
      currentBackgroundImage += 1;
    } else {
      currentBackgroundImage = 1;
    }

    var $bookCover = $(this);
    var imageUrl = "url(images/" + currentBackgroundImage +".jpg)";
    
    $bookCover.css("background-image", imageUrl);
  })  
});