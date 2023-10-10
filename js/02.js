  console.log('C O I N C I D E N C I A');

let str1 = "The sun is out today.";
let str2 = "Let´s go for a run today.";
let str3 = "Regular expressions can sometimes be fun.";
let str4 = "A hot dog without a bun ain´t no fun.";
let unRegex = /.un/g;

console.log(" ");
try {
  consola('[Conteo Resumido]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }

let myMatch = str4.match(unRegex);
console.log(myMatch); 

console.log(" ");

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

console.log(" ");

try {
  consola('[Exec().]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }

  var myRe = /ab*/g;
  var str = "abbcdefabhabb";
  var myArray;
 while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Se ha encontrado: " + myArray[0] + ". ";
  msg += "La siguiente COINCIDENCIA empieza en el INDICE " + myRe.lastIndex;
  console.log(msg);
}
//_______________________________________________//

try {
  consola('[Test().]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }

  var cadena = "hello world!";
  var result = /^hello/.test(cadena);
  console.log(result); // 
  
  var cadena = "hello world!";
  var result = /^my/.test(cadena);
  console.log(result); // true

  function probarEntrada(regexp, cadena) {
    var subcadena;
    if (regexp.test(cadena)) {
      subcadena = " contiene ";
    } else {
      subcadena = " no contiene ";
    }
    console.log(cadena + subcadena + regexp.source);
  }
  //_______________________________________________//

  try {
    consola('[RegExp().]');
    } catch (e) {
    console. log(`Error: ${e.mesage}`);
    }

    "canciones".match(/[aeiou]/)

    /*var er = /ab+c/i; // notación literal
    var er = new RegExp("ab+c", "i"); 
    var er = new RegExp(/ab+c/, "i"); 

    var er = /\w+/;
    var er = new RegExp("\\w+");*/

