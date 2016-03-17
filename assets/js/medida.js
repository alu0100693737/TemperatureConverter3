//(function(exports){//clausura
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

var regexp2 = XRegExp('^(\\s*)                                    \n' +
               '(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?)\n' +
               '(\\s*)                                             \n' +
               '(?<tipo> [fckCFK]) #tipo                           \n' +
               '(\\s*)                                             \n' +
               '(to)?                                              \n' +
               '(\\s*)                                             \n' +
               '(?<destino> [fckCFK]) #destino                     \n' +
               '(\\s*)$','ix');


/**Constructor 'clase' Medida*/
function Medida(valor,tipo){

this.value = valor;
this.type = tipo;
}


Medida.match= function(){
  var valor = XRegExp.exec(original.value, regexp2);
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
      var source = new measures[tipo](numero, tipo, destino);  // new Fahrenheit(32)
      var target = "to" + measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      return 'Undefined convert "'+tipo+'" to "'+destino+'"';
    }
  }
  else
    return " NO matches ERROR! Try something like '-8.2e-3 C' instead";
};
