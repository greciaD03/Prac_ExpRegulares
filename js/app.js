//var re = new RegExp("/[a-zA-Z0-9.-]@[a-z]\.(com)/g");
//var correo = re.exec("grecia.mtz@gmail.com");
//console.log("Prueba: " + re.lastIndex);

function validateEmail(){ 
	var emailField = document.getElementById('user-email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		alert('Email is valid, continue with form submission');
		return true;
	}else{
		alert('Email is invalid, skip form submission');
		return false;
	}
} 

//___________________________________________//

function validarEmail(email){
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!expr.trst(email))
    alert("Error: La direccion de correo" + email + "es incorrecta."); 
}

//___________________________________________//

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("El valor de lastIndex es " + myRe.lastIndex);

//___________________________________________//

var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);