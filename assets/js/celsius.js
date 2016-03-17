//(function(exports){//clausura
//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
Celsius.prototype = new Temperatura();//heredamos de temp
Celsius.prototype.constructor = Celsius;
Medida.measures.c = Celsius;
Medida.measures.C = Celsius;

function Celsius(valor,tipo,nuevoTipo)
{
  Temperatura.call(this,valor,tipo,nuevoTipo);
}

Celsius.prototype.toFarenheit = function(){
  return ((this.value * 9/5) + 32);
};

Celsius.prototype.toKelvin = function(){
  return (this.value + 273.15);
};
//exports.Celsius = Celsius;
//})(this);//clausura
