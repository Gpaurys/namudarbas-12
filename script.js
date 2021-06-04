"use strict";


do {
  var kaina = prompt("Įveskite prekės kainą");
  var kaina = Number(kaina);
} while (isNaN(kaina) || kaina <= 0)


var PVM = kaina * 0.21;
var bendraKaina = kaina + PVM;



console.log("Prekės kainą su PVM: " + bendraKaina.toFixed(2) + " €");
console.log("PVM: " + PVM.toFixed(2) + " €");
console.log("Prekės kainą be PVM: " + kaina.toFixed(2) + " €");
