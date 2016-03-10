"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
/**Constructor 'clase' Medida*/
function Medida(num, tipo) {//constructor
  this.num = num;
  this.tipo = tipo;
}

/**Metodo que devuelve la parte numerica de la expresion a evaluar*/
Medida.prototype.getNum = function() {
  return this.num;
}

/**Metodo que asigna al atributo num un valor*/
Medida.prototype.setNum = function(num) {
  getNum() = num;
}

/**Metodo que devuelve el tipo de la expresion a evaluar*/
Medida.prototype.getTipo = function() {
  return this.tipo;
}

/**Metodo que asigna al atributo tipo una medida Celsius o Farenheit*/
Medida.prototype.setTipo = function(tipo) {
  getTipo() = tipo;
}

/**Metodo que retorna error. No debe poder ejecutarse esta funcion. Error grave*/
Medida.prototype.mensajeError = function() {
    converted.innerHTML = "ERROR! Try something like '-8.2e-3 C' instead";
    console.error("Esta condicion no deberia ocurrir");
}
