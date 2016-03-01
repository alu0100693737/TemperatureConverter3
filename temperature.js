//(function(exports){//clausura
//var XRegExp = require('xregexp');
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
/**Constructor 'clase' Medida*/
function Medida(num, tipo) {//constructor
  this.num = num;
  this.tipo = tipo;
}

/**Constructor clase Temperatura*/
function Temperatura(num,  tipo) {
  Medida.call(this, num, tipo);
}

Temperatura.prototype = new Medida(); //herencia

function Celsius(num, tipo){
  Temperatura.call(this, num, tipo);
}
function Farenheit(num, tipo){
  Temperatura.call(this, num, tipo);
}
function Kelvin(num, tipo){
  Temperatura.call(this, num, tipo);
}

Celsius.prototype = new Temperatura(); //herencia
Farenheit.prototype = new Temperatura(); //herencia
Kelvin.prototype = new Temperatura(); //herencia

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

/**Determina si el tipo es Celsius o Farenheit*/
Celsius.prototype.getMedida = function() {
  var result, result1;
      result = (this.num * 9/5)+32; //farenheint
      result1 = this.num + 273.15;//kelvin
      result = result.toFixed(2)+ " Farenheit and "+ result1.toFixed(2) + " Kelvin";
    return result;
}

Farenheit.prototype.getMedida = function() {
  var result, result1;
  result = (this.num - 32)*5/9; //celsius
  result1 = 5*(this.num -32)/9 + 273.15; //kelvin
  result = result.toFixed(2)+" Celsius and " + result1.toFixed(2) + " Kelvin";
  return result;
}

Kelvin.prototype.getMedida = function() {
  var result, result1;
  console.log("Estamos ante un kelvin");
  result = this.num - 273.15;
  result1 = 9*(this.num -273.15)/5 + 32;
  result = result.toFixed(2)+" Celsius and " + result1.toFixed(2) + " Farenheit";
  return result;
}

/**Funcion llamada en el html, creador de objeto Medida*/
function calculate() {
  var temp = original.value;
  //expresion regular. Recordar ?: matches
  /*var regexp = XRegExp('(?<expresion>\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfFkK]))' +
                      '(?<to> to)' +
                      '(?<cambio> [fFcCkK]$)ccc', 'x');*/
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfFkK])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin))?\s*$/;
  var m = temp.match(regexp);
  if (m) {
    for (var i = 0; i < m.length; i++) {
       console.log(m[i]);
    }
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      var resultado = new Celsius(num, type);
    }else if (type == 'f' || type == 'F') {
      var resultado = new Farenheit(num, type);
    }else if (type == 'k' || type == 'K') {
      var resultado = new Kelvin(num, type);
    }else{//Esta condicion no debe darse
      converted.innerHTML = "ERROR! Try something like '-8.2e-3 C' instead!!!!";
    }
    var final = resultado.getMedida();
    converted.innerHTML = final;
    //document.getElementById("converted").innerHTML= "HOAL";
    return true;
    } else {
      converted.innerHTML = "ERROR! Try something like '-8.2e-3 C' instead";
  }
}

//})(this);//clausura
