  console.log('C O I N C I D E N C I A');

let str1 = "The sun is out today.";
let str2 = "Let´s go for a run today.";
let str3 = "Regular expressions can sometimes be fun.";
let str4 = "A hot dog without a bun ain´t no fun.";
let unRegex = /.un/g;

try {
  consola('[Conteo Resumido]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }

let myMatch = str4.match(unRegex);
console.log(myMatch); 

try {
  consola('[Conteo en Consola]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }
console.log(unRegex.test(str1));
console.log(unRegex.lastIndex);

console.log(unRegex.test(str2));
console.log(unRegex.lastIndex);

console.log(unRegex.test(str3));
console.log(unRegex.lastIndex);

console.log(unRegex.test(str4));
console.log(unRegex.lastIndex);

try {
  consola('[Exec().]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }

var myRe = /ab*/g;
var str = "abbcdefabh";
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Se ha encontrado " + myArray[0] + ". ";
  msg += "La siguiente coincidencia empieza en el indice " + myRe.lastIndex;
  console.log(msg);
}