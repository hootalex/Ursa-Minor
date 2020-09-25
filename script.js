$( ".toggledark" ).click(function() {
  $("body").toggleClass("dark");

if ($("body").hasClass("dark")) {

    $(".toggledark").html("ó");
    document.documentElement.style.setProperty('--type', 'white');
  document.documentElement.style.setProperty('--bg', 'black');

} else {

  $(".toggledark").html("3");

  document.documentElement.style.setProperty('--type', 'black');
  document.documentElement.style.setProperty('--bg', 'white');
}

});

function darkmode() {

document.documentElement.style.setProperty('--type', randomColor());
document.documentElement.style.setProperty('--bg', 'black');

}

function lightmode() {

document.documentElement.style.setProperty('--type', randomColor({luminosity: 'dark'}));
document.documentElement.style.setProperty('--bg', randomColor({luminosity: 'light'}));

}



$( ".togglerandom" ).click(function() {

  if (Math.random()>.5) { darkmode()} else

  {lightmode()}

});

$( ".toggleabout" ).click(function() {

  $(".about").toggleClass("aboutshow")

});

$( ".x" ).click(function() {

  $(".about").removeClass("aboutshow")

});


$( ".grinnell" ).keyup(function() {
  if ($(this).html() == "BIRD LORE") {

    $(".download").addClass("dlshow")

  }


});




$( "#fatbear" ).on('mousemove touchmove change', function () {

var slideval = $('#fatbear').val();

console.log(slideval)

$(".fatbear").css("font-variation-settings","'wght'" + slideval )
});
