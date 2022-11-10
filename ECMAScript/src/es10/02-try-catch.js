//Intentar atrapar errores
try {
    hello();
} catch (error) {
    console.log(error);
}

//Misma sintaxis 

try {
    anotherFn();
} catch { // Misma logica pero me permite personalizar el error
    console.log('Esto es un error');
}