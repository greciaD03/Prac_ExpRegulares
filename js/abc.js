cadena = "Lorem ipsum dolor sit amet";
cadena = cadena.replace(/[o]/ig, "0");
cadena = cadena.replace(/[a]/ig, "4");
cadena = cadena.replace(/[e]/ig, "3");
cadena = cadena.replace(/[i]/ig, "1");
cadena = cadena.replace(/[l]/ig, "L"); 
document.write(cadena + "<br>" + "<br>");

texto = "Lorem ipsum dolor sit amet";
texto = texto.replace(/([aei])/g, "<$1>");
//texto = texto.replace(/([aei])/g, "_$1"); 
//texto = texto.replace(/([aei])/g, "_X_");
texto = document.write(texto); 

//________________________________________________//

