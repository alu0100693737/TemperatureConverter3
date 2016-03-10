"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
/**Funcion llamada en el html, creador de objeto Medida*/
function calculate() {
  var temp = original.value;
  //expresion regular. Recordar ?: matches

  var dato = XRegExp('(?<expresion>  ([-+]?[0-9]+(?:\.[0-9]+)?(?:e[+-]?[0-9]+)?)[ ]*([cCfFkK])((e|el|els|elsi|elsiu|elsius)|(a|ar|are|aren|arenh|arenhe|arenhei|arenheit)|(e|el|elv|elvi|elvin))?) # expresion \n\
                      (?<opcional> [ ]*([Tt][oO])?[ ]*)   #opcional  \n\
                      (?<medida>   [ ]*[CcKkFf])   #medida ', 'x');

  // XRegExp.exec gives you named backreferences on the match result
  var match = XRegExp.exec(original.value, dato);

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
