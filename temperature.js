"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  //expresion regular. Recordar ?: matches
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit))?\s*$/i;

  var m = temp.match(regexp);
  if (m) {

    for (var i = 0; i < m.length; i++) {
       console.log(m[i]);
    }
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    for (var i = 0; i < m.length; i++) {

    }

    document.getElementById("converted").innerHTML= result;

    //alert(result);
  }
  else {
    document.getElementById("converted").innerHTML= "ERROR! Try something like '-4.2C' instead";
    return console.error("No encontrado matches");
    //converted.innerHTML = "ERROR! Try something like '-8.2e-3 C' instead";
  }
}
function calculate2(prueba){
    return console.error("missing target");
}
