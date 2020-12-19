$( "path, polygon, rect" ).click(function() {
  $( this ).addClass("explode")
});



 function highlight(click, mark, style) {
          $(mark).each(function(i) {
            var elm = $(this);
            setTimeout(function() {
              elm.toggleClass(style);
            }, i * Math.floor(Math.random() * 30) + 1  );
          });
          $(click).toggleClass(style);
        }

          highlight(this, ".typelink path, .typelink polygon, .typelink rect", "red");



$( ".typelink" ).mouseover(function() {
  var desc = $( this ).attr("desc")
  $(".info").html(desc)
});
