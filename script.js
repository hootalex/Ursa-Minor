var def= "*"

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

$( "path, polygon, rect" ).click(function() {
  $( this ).addClass("explode")
});


          $(".typelink path, .typelink polygon, .typelink rect").each(function(i) {
            var left = "px"
            var top = "px"
$(this).css({'transform' : 'translate(' + getRandomArbitrary(-5, 5)+"px" +', ' + getRandomArbitrary(-5, 5)+"px" + ')'});
          });


 function highlight(click, mark, style) {
          $(mark).each(function(i) {
            var elm = $(this);
            setTimeout(function() {
              elm.toggleClass(style);
              elm.css({'transform' : 'translate(' + 0 +', ' + 0 + ')'});

            }, i * Math.floor(Math.random() * 30) + 1  );
          });
          $(click).toggleClass(style);
        }

          highlight(this, ".typelink path, .typelink polygon, .typelink rect", "red");



$( ".typelink" ).mouseover(function() {
  var desc = $( this ).attr("desc")
  $(".info").html(desc)
});

$(".typelink").mouseout(function(){
  $(".info").html(def)
});

$(".info").html(def)
