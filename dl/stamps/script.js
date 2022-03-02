var whirlydownload = "wbirdie-1605638293.zip"
var batdownload = "wbats-1605638302.zip"
var bothdownload = "wbirdiewbats-1605638280.zip"


var whirlydownloadcode = "?t4fasd4asd234f"
var batdownloadcode = "?fsdf5sadfa"
var bothdownloadcode = "?bgrg4qdfdf50s"

var cycleWhirlybats = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var cycleWhirly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

$("#mob").html($(location).attr('href'))


function myFunction() {
  var count = 0;
  jQuery.each(cycleWhirlybats, function(index, value) {

    setTimeout(function() {
      $(".wbcontainer").html("<span class='wb'>" + value + "</span> ");

    }, count * 1000)
    count++;
  });
}

function myFunctionii() {
  var count = 0;
  jQuery.each(cycleWhirly, function(index, value) {

    setTimeout(function() {
      $(".wcontainer").append("<span class='wb'>" + value + "</span>");

    }, count * 1000)
    count++;
  });
}

myFunction();

myFunctionii();



if (window.location.href.indexOf(whirlydownloadcode) > -1) {
    $('h1').wrap("<a href='"+whirlydownload+"'></a>")
}

if (window.location.href.indexOf(batdownloadcode) > -1) {
    $('h1').wrap("<a href='"+batdownload+"'></a>")
}

if (window.location.href.indexOf(bothdownloadcode) > -1) {
    $('h1').wrap("<a href='"+bothdownload+"'></a>")
}
