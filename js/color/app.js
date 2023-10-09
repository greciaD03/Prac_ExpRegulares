function consola(mensaje, color='#008000'){
    if (typeof color != 'string') {
        throw TypeError('El argumento `color` debe ser una cadena de caracteres.');
    }

    console.log(`%c${mensaje}`, `color:${color}`);
}

try {
    consola('Color por defecto. . .');
} catch (e) {
    console.log(`Error: ${e.message}`); 
}