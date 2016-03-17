//(function(exports){
//  "use strict";

function Temperatura(valor,tipo,nuevoTipo){
  this.nuevoTipo = nuevoTipo;
  Medida.call(this, valor, tipo);
  /* tipo es opcional*/
}

Temperatura.prototype = new Medida();//heredamos

Temperatura.prototype.get_nuevotipo=function(){
  return this.nuevoTipo;
}

//exports.Temperatura=Temperatura;
//})(this);
