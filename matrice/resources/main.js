$(document).ready(function(){
    $(".fill").click(function(){
        $(".form").addClass("blue");
    });

    $(".empty").click(function(){
        $(".form").removeClass("blue");
    });

    $( ".rond" ).click(function() {
      $( this ).toggleClass("blue");
    });


});