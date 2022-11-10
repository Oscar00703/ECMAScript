//Trabajar con un numero y regresar un valor por defecto cuando sea nulo
const anotherNumber = 1;
const validate = anotherNumber ?? 5; //Estamos preguntando si este valor es nulo
console.log(validate); //Si es nulo, devuelve el 5