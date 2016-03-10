"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Celsius(num, tipo, tiponew){
  Temperatura.call(this, num, tipo, tiponew);
}

Celsius.prototype = new Temperatura(); //herencia

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
