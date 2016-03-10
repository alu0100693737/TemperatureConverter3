//(function(exports){//clausura
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
/**Constructor clase Temperatura*/
function Temperatura(num,  tipo, tiponew) {
  this.typenew = tiponew;
  Medida.call(this, num, tipo);
}

Temperatura.prototype = new Medida(); //herencia

/**Metodo que devuelve el tipo de la expresion a evaluar*/
Temperatura.prototype.getTipoNew = function() {
  return this.typenew;
}

//})(this);//clausura
