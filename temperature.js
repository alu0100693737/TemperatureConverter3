//(function(exports){//clausura

"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

/*exports.Expresion = function Expresion(num, tipo) {
  this.num = num;
  this.tipo = tipo;
  console.log(num + " " + tipo);
  this.mensaje = function mensaje() {
    return "Recogido expresion correcta";
  }
}*/

function Converter(num, tipo) {
  this.num = num;
  this.tipo = tipo;
}
//Converter.prototype = new Expresion();

Converter.prototype.getConverter = function() {
  var result;
    if (this.tipo == 'c' || this.tipo == 'C') {
      result = (this.num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (this.num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    return result;
}
function calculate() {

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
    var resultado = new Converter(num, type);
    var final = resultado.getConverter();
    alert(final);
    //document.getElementById("converted").innerHTML= resultado;
    return true;
    } else {
      alert("ERROR! Try something like '-4.2C' instead");
    //document.getElementById("converted").innerHTML= "ERROR! Try something like '-4.2C' instead";
//var expresion = new Expresion(num, tipo);
//deberia document.getElementById("converted").innerHTML = expresion.mostrar();
    return console.log("No encontrado matches");
    //converted.innerHTML = "ERROR! Try something like '-8.2e-3 C' instead";
  }
}

//})(this);//clausura
