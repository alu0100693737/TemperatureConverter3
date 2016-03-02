//(function(exports){//clausura
//var XRegExp = require('xregexp');
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
/**Constructor 'clase' Medida*/
function Medida(num, tipo) {//constructor
  this.num = num;
  this.tipo = tipo;
}

/**Constructor clase Temperatura*/
function Temperatura(num,  tipo, tiponew) {
  this.typenew = tiponew;
  Medida.call(this, num, tipo);
}

Temperatura.prototype = new Medida(); //herencia

function Celsius(num, tipo, tiponew){
  Temperatura.call(this, num, tipo, tiponew);
}
function Farenheit(num, tipo, tiponew){
  Temperatura.call(this, num, tipo, tiponew);
}
function Kelvin(num, tipo, tiponew){
  Temperatura.call(this, num, tipo, tiponew);
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

/**Metodo que devuelve el tipo de la expresion a evaluar*/
Temperatura.prototype.getTipoNew = function() {
  return this.typenew;
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
  var result;
  if((this.typenew == 'f') || (this.typenew == 'F')){
      result = (this.num * 9/5)+32; //farenheint
      result = result.toFixed(2)+ " Farenheit";
  }else  if((this.typenew == 'k') || (this.typenew == 'K')){

      result = this.num + 273.15;//kelvin
      result = result.toFixed(2) + " Kelvin";
    }
    return result;
}

Farenheit.prototype.getMedida = function() {
  var result;
  if((this.typenew == 'c') || (this.typenew == 'C')){
    result = (this.num - 32)*5/9; //celsius
    result = result.toFixed(2)+" Celsius";
  }else  if((this.typenew == 'k') || (this.typenew == 'K')){
    result = 5*(this.num -32)/9 + 273.15; //kelvin
    result = result.toFixed(2) + " Kelvin";
  }
  return result;
}

Kelvin.prototype.getMedida = function() {
  var result;
  if((this.typenew == 'c') || (this.typenew == 'C')){
    result = this.num - 273.15;
    result = result.toFixed(2)+" Celsius ";
  }else if((this.typenew == 'f') || (this.typenew == 'F')){
    result = 9*(this.num -273.15)/5 + 32;
    result = result.toFixed(2) + " Farenheit";
  }
  return result;
}

/**Funcion llamada en el html, creador de objeto Medida*/
function calculate() {
  var temp = original.value;
  //expresion regular. Recordar ?: matches
  /*var date = XRegExp('(?<year>  \s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfFkK])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin))?\s* (to|TO|To)?\s*[CcFfKk]\s*$)  # year  \n\
                      (?<month> [0-9]{2} ) -?  # month \n\
                      (?<day>   [0-9]{2} )     # day   ', 'x');

                      var match = XRegExp.exec('32F to C 05-03', date);

                      if(match) {
                        console.log("HEYSSS");
                      }*/
  var dato = XRegExp('(?<expresion>  ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkK])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin))?) # expresion \n\
                      (?<opcional> [ ]*([Tt][oO])?[ ]*)   #opcional  \n\
                      (?<medida>   [ ]*[CcKkFf])   #medida ', 'x');
                      
  // XRegExp.exec gives you named backreferences on the match result
  var match = XRegExp.exec(original.value, dato);

  if(match) {
    console.log("HEYSSS");
  }
//Expresion normal equivalente
  //var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfFkK])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin))?\s* (to|TO|To)?\s*([CcFfKk])$/ ;
  //var m = XRegExp.exec(temp, regexp);
  //var m = XRegExp.exec(temp, regexp);
  /*var m = temp.match(regexp);
  if(m) {
    console.log("HEYSSS");
  }*/
  if (match) {
    var num = match[2];
    var type = match[3];
    var typenew = match.medida;
    console.log(typenew);
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      var resultado = new Celsius(num, type, typenew);
    }else if (type == 'f' || type == 'F') {
      var resultado = new Farenheit(num, type, typenew);
    }else if (type == 'k' || type == 'K') {
      var resultado = new Kelvin(num, type, typenew);
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
