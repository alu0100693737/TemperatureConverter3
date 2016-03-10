"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Farenheit(num, tipo, tiponew){
  Temperatura.call(this, num, tipo, tiponew);
}

Farenheit.prototype = new Temperatura(); //herencia

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
