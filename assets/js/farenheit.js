//(function(exports){//clausura
//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Farenheit(valor,tipo,nuevoTipo){
  Temperatura.call(this,valor,tipo,nuevoTipo);
}
Farenheit.prototype = new Temperatura();
Farenheit.prototype.constructor = Farenheit;
Medida.measures.f=Farenheit;
Medida.measures.F = Farenheit;

Farenheit.prototype.toCelsius = function(){
  return ((this.value - 32)* 5/9);
};

Farenheit.prototype.toKelvin = function(){
  return (((this.value - 32)*5/9) + 273);
};

//exports.Farenheit = Farenheit;
//})(this);//clausura
