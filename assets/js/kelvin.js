//(function(exports){//clausura
//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Kelvin(valor,tipo,nuevoTipo){
  Temperatura.call(this,valor, tipo,nuevoTipo);

}
Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Medida.measures.k=Kelvin;
Medida.measures.K = Kelvin;

Kelvin.prototype.toCelsius = function(){
  return (this.value - 273.15);
};

Kelvin.prototype.toFarenheit = function(){
  return (((this.value - 273)*9/5)+32);
};

//exports.Kelvin = Kelvin;
//})(this);//clausura
