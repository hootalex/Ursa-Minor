var whirlydownload = "wdl.zip"
var batdownload = "wdl.zip"
var bothdownload = "both.zip"


var whirlydownloadcode = "?t4fasd4asd234f"
var batdownloadcode = "?fsdf5sadfa"
var bothdownloadcode = "?bgrg4qdfdf50s"

var cycleWhirlybats = ["A","B","Ç","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","é","f","g","h","i","j","k","l","m","n","o","ó","ô","ö","ò","ō","ø","õ","p","ṕ","q","ʠ","ɋ","r","s","t","u","v","w","x","y","z","А","Б","В","Г","Д","Е","Ё","Ж","З","*","+","=","±","^","а","б","в","г","#","{","}","[","]","−","×","≤","∞","%","Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Φ","Ω","Ͱ","Ϛ","Ϗ","ψ","0","1","2","3","4","5","6","7","8","9","⁄",".",",",":","?","/",")","-","¤","А"]

var cycleWhirly = ["A","Á","Â","Ä","À","Å","Ã","Æ","B","C","Ç","D","Ð","E","É","Ê","Ë","È","F","G","H","I","Í","Î","Ï","Ì","J","K","L","M","N","Ñ","O","Ó","Ô","Ö","Ò","Ø","Õ","Œ","P","Þ","Q","R","S","T","U","Ú","Û","Ü","Ù","V","W","Ẃ","Ŵ","Ẅ","Ẁ","X","Y","Ý","Ŷ","Ÿ","Ỳ","Z","0","1","2","3","4","5","6","7","8","9",".",",",":",";","…","!","¡","?","¿","·","•","*","#","/",":)"]


function myFunction() {
  var count = 0;
  jQuery.each(cycleWhirlybats, function(index, value) {

    setTimeout(function() {
      $(".wbcontainer").html("<span class='wb'>" + value + "</span> ");

    }, count * 100)
    count++;
  });
}

function myFunctionii() {
  var count = 0;
  jQuery.each(cycleWhirly, function(index, value) {

    setTimeout(function() {
      $(".wcontainer").html("<span class='wb'>" + value + "</span> ");

    }, count * 200)
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
