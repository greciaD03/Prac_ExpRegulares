try {
    consola('        °o [| VAR |] o°');
    } catch (e) {
    console. log(`Error: ${e.mesage}`);
    }

var saludar;
saludar = "(MADRE): dice buenos dias."
console.log(saludar); // saludar is undefined
//________________________________________//

var saludar = "(MENOR): ¡Hey, buenos dias!";
var tiempos = 2;

if (tiempos > 3){
    var saludar = "¡Bueno dias! tambien.";}
console.log(saludar)
//_________________________________________//

var saludar = "hey, buenos dias!";
var tiempos = 4;

if (tiempos > 3){
    var saludar = "(MAYOR): ¡Bueno dias! tambien.";}
console.log(saludar)
//_________________________________________//
//_________________________________________//
//_________________________________________//
//_________________________________________//

try {
    consola('        °o [| LET |] o°');
    } catch (e) {
    console. log(`Error: ${e.mesage}`);
    }
    
let saludo = "dice Hola ¿como estas?";
let hora = 4;

if (tiempos > 3) {
     let hola = "Es MAYOR que 3. . .";
     console.log(hola);
 }
//_________________________________________//

let bienvenida = "dice [2+2= 4]";
if (true) {
    let bienvenida = "dice [8/2= 4]"; 
    console.log(bienvenida); // "dice Hola tambien"
}
console.log(bienvenida); // "dice Hola"
//_________________________________________//
//_________________________________________//
//_________________________________________//
//_________________________________________//

try {
    consola('        °o [| CONST |] o°');
    } catch (e) {
    console. log(`Error: ${e.mesage}`);
    }

const gesto = {
    carta: "dice Hola",
    tiempos: 4
}
gesto.carta = "dice Hola tambien";
//_________________________________________//

const constante = 12;
console.log("El valor de la constante es " + constante);
try {
    constante = 20;
    console.log("El valor de la constante es " + constante);
} catch (error) {
    console.log("El valor de una constante no puede ser modificado: " + error);
}

// const b = 7;
// document.writeln("a es " + b + ".");
