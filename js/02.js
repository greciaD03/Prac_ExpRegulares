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
var str = "abbcdefabh";
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Se ha encontrado " + myArray[0] + ". ";
  msg += "La siguiente coincidencia empieza en el indice " + myRe.lastIndex;
  console.log(msg);
}

try {
  consola('[Test().]');
  } catch (e) {
  console. log(`Error: ${e.mesage}`);
  }

  function probarEntrada(regexp, cadena) {
    var subcadena;
    if (regexp.test(cadena)) {
      subcadena = " contiene ";
    } else {
      subcadena = " no contiene ";
    }
    console.log(cadena + subcadena + regexp.source);
  }

    try {
      consola('[Match().]');
      } catch (e) {
      console. log(`Error: ${e.mesage}`);
      }

      const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
      const regex = /[A-Z]/g;
      const found = paragraph.match(regex);

      console.log(found);
// Expected output: Array ["T", "I"]

      try {
        consola('[MatchAll().]');
        } catch (e) {
        console. log(`Error: ${e.mesage}`);
        }

        const regexp = /t(e)(st(\d?))/g;
        const str = 'test1test2';

        const array = [...str.matchAll(regexp)];

        console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

        console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

        try {
          consola('[Replace().]');
          } catch (e) {
          console. log(`Error: ${e.mesage}`);
          }

          const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

          console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

          const regex = /Dog/i;
          console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


          try {
            consola('[ReplaceAll().]');
            } catch (e) {
            console. log(`Error: ${e.mesage}`);
            }

            const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

            console.log(p.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
            const regex = /Dog/gi;
            console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"


            try {
              consola('[Search().]');
              } catch (e) {
              console. log(`Error: ${e.mesage}`);
              }

              function testinput(re, str) {
                var midstring;
                if (str.search(re) != -1) {
                  midstring = " contains ";
                } else {
                  midstring = " does not contain ";
                }
                console.log(str + midstring + re);
              }

              try {
                consola('[Split().]');
                } catch (e) {
                console. log(`Error: ${e.mesage}`);
                }

                var str = "asdfghjkl";
                strReverse = str.split("").reverse().join(""); // 'lkjhgfdsa'
// split() retorna un array en el cual reverse() y join() pueden ser aplicados

  console.log(" ");
