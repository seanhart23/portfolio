//SMOOTH SCROLLLING FOR LINKS

var $;

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
           window.location.hash = hash;
      });
    }
  });
});

$(function()
  {
    $(document).ready(function()
                        {
                            $("#left-header").fadeIn(1500);
                            $("#image-container").fadeIn(1500);
                            return false;
                        }); 
  });
  