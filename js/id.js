console.log("IGUALDAD E IDENTIDAD")
    
 var num = 0;
 var obj = new String("0");
 var str = "0";
 var b = false;

 console.log(num === num); // true
 console.log(num === obj); // false
 console.log(null === undefined); // false
 console.log(obj === null); // false
 console.log(obj === undefined); // false

 console.log("IGUALDAD ESTRICTA")

 var num = 0;
 var obj = new String("0");
 var str = "0";
 var b = false;

 console.log(num == num); // true
 console.log(num == obj); // true
 console.log(null == undefined); // true
// both false, except in rare cases
 console.log(obj == null);
 console.log(obj == undefined);

console.log("IGUALDAD DEBIL")

var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(num == obj); // true
console.log(null == undefined); // true

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);