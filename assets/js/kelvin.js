"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Kelvin(num, tipo, tiponew){
  Temperatura.call(this, num, tipo, tiponew);
}

Kelvin.prototype = new Temperatura(); //herencia

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
