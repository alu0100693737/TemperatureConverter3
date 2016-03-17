(function(exports){//clausura
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

/** Constructor con un solo parametro*/
function Medida(val){
var exp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])/;
 var valor = val.match(exp);
 this.num = parseFloat(valor[1]);
 this.tipo = valor[2];
}

/**Constructor 'clase' Medida*/
function Medida(valor,tipo){

this.value = valor;
this.type = tipo;
}


Medida.match= function(){
  var valor = XRegExp.exec(convert.value, regexp2);
  return valor;
}

Medida.measures={};

Medida.convertir = function(valor) {
  var measures = Medida.measures;

  var match = Medida.match(valor);
  if (match) {
    var numero = match.numero,
        tipo   = match.tipo,
        destino = match.destino;
    try {
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to" + measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      return 'Undefined convert "'+tipo+'" to "'+destino+'"';
    }
  }
  else
    return "ERROR! Try something like '-8.2e-3 C' instead";
};
