var nombre = document.forms["registro"]["nombre"];
var correo = document.forms["registro"]["email"];
var clave1 = document.forms["registro"]["pwd1"];
var clave2 = document.forms["registro"]["pwd2"];
var check = document.forms["resgistro"]["gridCheck"];

var error_Nom = document.getElementById("Name_error");
var error_Mail = document.getElementById("Mail_error");
var error_pass1 = document.getElementById("Clave1_error");
var error_pass2 = document.getElementById("Clave2_error");
var error_check = document.getElementById("Check_error");

nombre.addEventlistener("blur", nameVerify, true);
correo.addEventlistener("blur", emailVerify, true);
clave1.addEventListener("blur", passwordVerify, true);

function validar (){
    var expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var exp =/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if(nombre.value == ""){
        nombre.style.border = "1px solid red";
        error_Nom.textContent = "Nombre requerido";
        error_Nom.style.color = "red";
        nombre.focus();
        return false;
    }

    if(nombre.value.length < 4 || nombre.value.length > 16){
        nombre.style.border = "1px solid red";
        error_Nom.textContent = "El nombre debe tener entre de 4 y 16 caracteres";
        error_Nom.style.color = "red";
        nombre.focus();
        return false;
    }

    if(correo.value == ""){
        correo.style.border = "1px solid red";
        error_Mail.textContent = "Correo requerido";
        error_Mail.style.color = "red";
        correo.focus();
        return false;
    }

    if(!expresion.test(correo)){
        correo.style.border = "1px solid red";
        error_Mail.textContent = "Introduzca un correo váido";
        error_Mail.style.color = "red";
        correo.focus();
        return false;
    }

    if(clave1.value==""){
        clave1.style.border = "1px solid red";
        error_pass1.textContent = "Contraseña requerida";
        error_pass1.style.color="red";
        clave1.focus();
        return false;
    }

    if(!exp.match(clave1)){
        clave1.style.border = "1px solid red";
        error_pass1.textContent = "La contraseña debe contener al menos una mayuscula, al menos uan minuscula, al menos un digito y tener entre 8 y 16 carcateres";
        error_pass1.style.color = "red";
        clave1.focus();
        return false;
    }

    if(clave1.value != clave2.value){
        clave1.style.border = "1px solid red";
        clave2.style.border = "1px solid red";
        error_pass1.textContent = "No coinciden las contraseñas";
        error_pass1.style.color = "red";
        return false;
    }
}

function nameVerify(){
    if(nombre.value != ""){
        nombre.style.border = "1px solid #5e6e66";
        error.Nom.innerHTML = "";
        return true;
    }
}

function emailVerify(){
    if(correo.value !=""){
        correo.style.border = "1px solid #5e6e66"
        error_Mail.innerHTML = "";
        return true;
    }
}

function passwordVerify(){
    if(clave1.value != ""){
        clave1.style.border = "1px solid #5e6e66";
        error_pass1.innerHTML = "";
        return true;
    }
}
